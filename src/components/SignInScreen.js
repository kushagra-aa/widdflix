// style
import { useRef } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./../styles/css/signin.css";

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        console.log(user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <div className="signin">
        <h2>sign in</h2>
        <form className="signin-form">
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button type="submit" onClick={signIn}>
            submit
          </button>
          <p>
            new at widdfix?
            <span onClick={register}>sign up now!</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignInScreen;
