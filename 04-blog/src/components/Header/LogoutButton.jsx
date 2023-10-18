import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutButton() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        authService
            .logout()
            .then(() => {
                dispatch(logout());
            })
            .catch((error) => console.log("SOMETHING WENT WRONG: ", error));
    };
    return <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full" onClick={handleLogout}>LOG OUT</button>;
}

export default LogoutButton;
