import { useEffect, useState } from "react";
import "./App.css";
import SignIn from "./SignIn/SignIn";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  const [userName, setUserName] = useState("prtk2");
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      {/* {user ? ( */}
      <LandingPage userName={userName} email={email} />
      {/* ) : ( */}
      {/* <SignIn
        email={email}
        setEmail={setEmail}
        emailErrMsg={emailErrMsg}
        password={password}
        setPassword={setPassword}
        passwordErrMsg={passwordErrMsg}
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        clearErrMsgs={clearErrMsgs}
        clearInputs={clearInputs}
        userName={userName}
        setUserName={setUserName}
      /> */}
      {/* // )} */}
    </div>
  );
}

export default App;
