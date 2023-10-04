import React from "react";

function SignUp() {
    return (
        <div className="SignUpContainer absolute flex justify-center items-center w-full h-screen overflow-hidden">
            <div className="signUpBox">
                <p className="text-4xl text-center font-bold mb-5">Create your account</p>
                <form method="post" className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Your full name"
                        className="m-2 h-14 rounded-lg py-2 px-4"
                    />
                    <input
                        type="email"
                        placeholder="Your email"
                        className="m-2 h-14 rounded-lg py-2 px-4"
                    />
                    <input
                        type="number"
                        placeholder="Your Phone number"
                        className="m-2 h-14 rounded-lg py-2 px-4"
                    />
                    <input
                        type="password"
                        placeholder="Your Password"
                        className="m-2 h-14 rounded-lg py-2 px-4"
                    />
                    <input
                        type="password"
                        placeholder="Confirm your Password"
                        className="m-2 h-14 rounded-lg py-2 px-4"
                    />
                    <div className="loginButtonContainer flex justify-center">
                        <button className="bg-blue-500 my-3 py-3 rounded-lg w-4/5 ">
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
