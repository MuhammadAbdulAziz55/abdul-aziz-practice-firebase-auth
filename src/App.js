import { signInWithPopup, signOut } from "firebase/auth";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
// import RegisterBootstrap from "./components/RegisterBootstrap";
import {
  auth,
  facebookProvider,
  googleProvider,
} from "./components/firebase.init";
import { useState } from "react";
// import Register from "./components/Register";
// import RegisterReactBootstrap from "./components/RegisterReactBootstrap";
// import Main from "./components/layout/Main";
// import LoginBootstrap from "./components/LoginBootstrap";
// import SofttechWebsite from "./components/SofttechWebsite";

function App() {
  const [user, setUser] = useState({});
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;

        console.log(user);
        setUser(res.user);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        console.error({});
      });
  };

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setUser(user);
      })
      .catch((err) => {
        console.error("error", err);
      });
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Main />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <RegisterReactBootstrap />,
  //       },
  //       {
  //         path: "/register",
  //         element: <RegisterReactBootstrap />,
  //       },
  //       {
  //         path: "/login",
  //         element: <LoginBootstrap />,
  //       },
  //       {
  //         path: "/https://softtech.com.bd/ppc-management/",
  //         element: <SofttechWebsite />,
  //       },
  //     ],
  //   },
  // ]);
  return (
    <div>
      {user.uid ? (
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
      )}

      <br />

      {/* <Register /> */}
      {/* <RegisterReactBootstrap /> */}
      {/* <RegisterBootstrap /> */}
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
