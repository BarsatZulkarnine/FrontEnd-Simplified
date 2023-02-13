import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Menu from "./Menu";
import HeaderBlock from "./HeaderBlock";
import Login from "./Login";
import SignUp from "./SignUp";
import TeslaAccount from "./TeslaAccount";
import { auth, db } from "./firebase";
import TestPage from "./testPage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  removeDoc,
  deleteDoc,
} from "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";

function App() {
  // const [user, setUser] = useState({});
  const user = false
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");



  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     console.log(user);
  //     if (user) {
  //       setUser(user);
  //     }
  //   });
  // }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                {isMenuOpen && <Menu />}
                <HeaderBlock />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/teslaaccount" />
                ) : (
                  <Login
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
            
                  />
                )}
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <SignUp
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
              />
            }
          />
          <Route
            path="/teslaaccount"
            element={
              <>
                {user ? (
                  <Navigate to="/login" />
                ) : (
                  <>
                    <TeslaAccount
                      isMenuOpen={isMenuOpen}
                      setIsMenuOpen={setIsMenuOpen}
                    />
                    {isMenuOpen && <Menu />}
                  </>
                )}
              </>
            }
          />
          <Route path="/testpage" element={<TestPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
