import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
    About,
    Contact,
    Footer,
    Header,
    Home,
    Login,
    SignUp,
} from "./components";
import {
    Route,
    Router,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={route} />
    </React.StrictMode>
);
