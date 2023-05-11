import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Layout from "../components/layouts/BaseLayout";
import AuthLayout from "../components/layouts/AuthLayout";


const AppRoutes = () => {
  return (
    <Routes>
      {/* We now get the layout (which has navbar header etc.) */}
      <Route path="/" element={<Layout />}>
        {/* Category part is now editable because of semi column */}
        {/* We sent Index prop to Route with this one */}
        <Route index element={<Home />} />
        <Route path="category">
          <Route path=":id" element={<Categories />}></Route>
        </Route>
      </Route>
      <Route path="/about" element={<h1>About</h1>}></Route>
      <Route path="/login" element={<AuthLayout/>}>
        <Route index element={<h1>Login Form</h1>}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
