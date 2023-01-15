// import { signInWithPopup, signOut } from "firebase/auth";
import "./App.css";
import RegisterBootstrap from "./components/RegisterBootstrap";
// import {
//   auth,
//   facebookProvider,
//   googleProvider,
// } from "./components/firebase.init";
// import { useState } from "react";
// import Register from "./components/Register";
import RegisterReactBootstrap from "./components/RegisterReactBootstrap";

function App() {
  // const [user, setUser] = useState({});
  // const handleGoogleSignIn = () => {
  //   signInWithPopup(auth, googleProvider)
  //     .then((res) => {
  //       console.log(res.user);
  //       setUser(res.user);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };
  // const handleGoogleSignOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       setUser({});
  //     })
  //     .catch(() => {
  //       console.error({});
  //     });
  // };

  // const handleFacebookSignIn = () => {
  //   signInWithPopup(auth, facebookProvider)
  //     .then((res) => {
  //       console.log(res.user);
  //       setUser(res.user);
  //     })
  //     .catch((err) => {
  //       console.error("error", err);
  //     });
  // };
  return (
    <div>
      {/* {user.uid ? (
        <button onClick={handleGoogleSignOut}>SignOut</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google SignIn</button>
          <button onClick={handleFacebookSignIn}>Facebook SignIn</button>
        </>
      )}
      {user.uid && (
        <div>
          <h2>Welcome, {user.displayName}</h2>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )} */}

      <br />

      {/* <Register /> */}
      <RegisterReactBootstrap />
      {/* <RegisterBootstrap /> */}
    </div>
  );
}

export default App;
