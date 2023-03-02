import "./App.css";
import React, { useEffect } from "react";
import { auth, db } from "./Firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { collection, addDoc, getDocs , doc, getDoc, updateDoc, removeDoc, deleteDoc} from "firebase/firestore";

function App() {
  const [user, setUser] = React.useState({});

  function removePost(){
    const postRef = doc(db, "posts" ,"BmY9bVbkXtPrnvFBdXDF" )
    deleteDoc(postRef)

  }

  function updatePost(){
    const postRef = doc(db, "posts" ,"BmY9bVbkXtPrnvFBdXDF" )
    const post = {
      description: "Finish FES",
      title: "we can do it"

    }
    updateDoc(postRef, post);

  }

  function createPost() {
    const post = {
      title: "",
      description: "land $300k job",
    };
    addDoc(collection(db, "posts"), post);
  }

  async function getAllPosts() {
    const { docs } = await getDocs(collection(db, "posts"));
    const post = docs.map((elem) => ({ ...elem.data(), id: elem.id }));
    console.log(post);
  }

  async function getPostById() {
    const postRef = doc(db, "posts" ,"BmY9bVbkXtPrnvFBdXDF" )
    const postSnap = await getDoc(postRef)
    const post = postSnap.data();
    console.log(post);

  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "email@email.com", "tet123124")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "tet123124")
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <>
      <div className="container">
        <div className="nav__bar--iocn"></div>
        <div className="title">
          <div className="title__icon"></div>
          <h2 className="title">
            <span className="bold">Frontend</span>Simplified
          </h2>
        </div>
        {user.email != null ? (
          <>
            <button className="btn btn__logedin" onClick={logout}>
              {" "}
              {user.email[0].toUpperCase()}
            </button>
          </>
        ) : (
          <>
            <div className="nav__links">
              <button className="btn logIn" onClick={login}>
                Login
              </button>
              <button className="btn register">register</button>
            </div>
          </>
        )}
        <button onClick={createPost}>Create post</button>
        <button onClick={getAllPosts}>getAllPosts</button>
      </div>
      <button onClick={getPostById}>Get post by id</button>
      <button onClick={updatePost}>update post</button>
      <button onClick={removePost}>remove post</button>
    </>
  );
}

export default App;
