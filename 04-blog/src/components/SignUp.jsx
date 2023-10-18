import { useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from "postcss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";

const signUp = async (data) => {
    setError("");
    try {
        const userData = await authService.createAccount(data);
        if (userData) userData = await authService.getUserLoginStatus();
        if (userData) dispatch(login(userData));
        navigate("/");
    } catch (error) {
        setError(error.message);
    }
};

function SignUp() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const [register, handleSubmit] = useForm();

    return (
        <>
            <div className="flex item-center justify-center">
                <div className="w-full max-w-lg bg-gray-100 rounded-xl p-10 border boder-black/10">
                    <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-[100px]">
                            <Logo />
                        </span>
                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight">
                        SIGN UP TO CREATE YOUR ACCOUNT
                    </h2>
                    <p className="mt-2 text-center text-base text-black/60">
                        Already have an account &nbsp;
                        <Link
                            to="/login"
                            className="font-medium text-primary translate-all duration-200 hover:underline"
                        >
                            SIGN IN
                        </Link>
                    </p>
                    {error && (
                        <p className="text-red-500 text-center">{error}</p>
                    )}
                    <form onSubmit={handleSubmit(signUp)}>
                        <div className="space-y-5">
                            <Input
                                label="Name: "
                                placeholder="Enter your name"
                                type="text"
                                {...register("name", { required: true })}
                            />
                            <Input
                                label="Email: "
                                placeholder="Enter your email"
                                type="email"
                                {...register("email", {
                                    required: true,
                                    matchPattern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                                            value
                                        ) ||
                                        "Email address must be a valid address",
                                })}
                            />
                            <Input
                                label="Phone: "
                                placeholder="Enter your Phone number"
                                type="text"
                                {...register("phone", {
                                    required: true,
                                    validate: (value) =>
                                        /(\+*)((0[ -]*)*|((91 )*))((\d{12})|(\d{10}))/.test(
                                            value
                                        ) || "Phone number must be valid",
                                })}
                            />
                            <Button type="submit" className="w-full">
                                Create Account
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;
