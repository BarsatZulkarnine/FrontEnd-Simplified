import "./App.css";
import { auth } from "./Firebase/init";
import { createUserWithEmailAndPassword } from "firebase/auth";

function App() {
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
  return (
    <div>
      <button onClick={register}>register</button>
    </div>
  );
}

export default App;
