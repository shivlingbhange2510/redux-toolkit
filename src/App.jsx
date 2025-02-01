import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Navbar from "./component/Navbar";

import Home from "./component/Home";
import Quiz from './component/Quiz'
import Result from './component/Result'
const App = () => {
	return (
		<div>
			{/* Navbar */}
			{/* <Navbar /> */}
			{/* <h1>React Movie Explorer</h1> */}
      <h1>hiii</h1>
 <Quiz/>
			{/* <Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/result"} element={<Result />} />
				<Route path={"/quiz"} element={<Quiz />} />
			</Routes> */}
      
		</div>
	);
};

export default App;
