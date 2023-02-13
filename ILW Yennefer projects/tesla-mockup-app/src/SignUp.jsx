import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login } from "./features/userSlice";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  const dispatch = useDispatch();
  const history = useNavigate();

  const signUp = (event) => {
    email.preventDafault();
    if (!fName) {
      return alert("Please enter a first name");
    }

    if (!lName) {
      return alert("Please enter a last name");
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
        userAuth.user.updateProfile({
            displayName: fName
        }).then(()=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.fName
            })
            )
            history.push('/teslaaccount')
        })
    }).catch((error)=>alert(error.message))
  };



  return (
    <div className="signUp">
      <div className="signUp__header">
        <div className="signUp__logo">
          <Link>
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="signUp__language">
          <FontAwesomeIcon icon="fa-globe" />
          <span>en-US</span>
        </div>
      </div>
      <div className="signUp__info">
        <h1>Sign Up</h1>
        <form className="signUp__form">
          <label html for="fName">
            First Name
          </label>
          <input
            type="text"
            id="fName"
            value={fName}
            onChange={(event) => setfName(event.target.value)}
          />
          <label html for="lName">
            Last Name
          </label>
          <input
            type="text"
            id="lName"
            value={lName}
            onChange={(event) => setlName(event.target.value)}
          />
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <ButtonPrimary name="Create account" type="submit" onClick={signUp} />
        </form>
        <div className="signUp__divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/login">
          <ButtonSecondary name="Sign In" type="submit" />
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
