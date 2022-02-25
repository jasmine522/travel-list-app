import React from "react";
import BucketList from "./Components/BucketList";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Places from "./Components/Places";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div className="App">
      <BucketList />
      <Home />
      <Login />
      <Places />
      <SignUp />
    </div>
  )
}

export default App;
