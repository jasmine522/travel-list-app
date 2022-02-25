import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import BucketList from "./Components/BucketList";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Places from "./Components/Places";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <Router>
      <Routes>
      <Route path-="/" element={<Home />} />
      <Route path-="/login" element={<Login />} />
      <Route path-="/signUp" element={<SignUp />} />
      <Route path-="/places" element={<Places />} />
      <Route path-="/bucketList" element={<BucketList />} />
      </Routes>
    </Router>
  )
}

export default App;
