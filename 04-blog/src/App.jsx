import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        authService
            .getUserLoginStatus()
            .then((userData) => {
                if (userData) dispatch(login({ userData }));
                else dispatch(logout());
            })
            .catch(() => console.log("unable to fetch user login status"))
            .finally(setLoading(false)); 
    }, [loading]);

    return !loading ? (
        <div className="loading min-h-screen">LOGIN to view content</div>
    ) : (
        <>
            <div className="loggedIn min-h-screen">YOU ARE NOW LOGGED IN </div>
        </>
    );
}

export default App;
