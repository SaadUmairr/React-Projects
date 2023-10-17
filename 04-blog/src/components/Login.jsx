import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { login as storeLogin } from "../store/authSlice";
import { Logo } from "./index";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getUserLoginStatus();
                if (userData) dispatch(storeLogin(userData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center w-full">
                <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
                    <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-[100px]">
                            <Logo width="100%" />
                        </span>
                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight">
                        SIGN IN TO YOUR ACCOUNT
                    </h2>
                    <p className="mt-2 text-center text-base text-black/60">
                        Don&apos;t have any account &nbsp;
                        <Link
                            to="/signup"
                            className="font-medium text-primary translate-all duration-200 hover:underline"
                        >
                            SIGN UP
                        </Link>
                    </p>
                    {error && (
                        <p className="text-red-500 text-center">{error}</p>
                    )}
                    <form onSubmit={handleSubmit(login)}>
                        <div className="space-y-5"></div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
