import React from "react";

function Login() {
    return (
        <div className="loginContainer flex justify-center items-center w-full h-screen overflow-hidden">
          <div className="loginBox">
            <p className="text-6xl text-center font-bold mb-5">LOGIN</p>
            <form method="post" className="flex flex-col ">
              <input type="email" placeholder="Your email" className="m-2 h-14 rounded-lg py-2 px-4"/>
              <input type="password" placeholder="Your Password" className="m-2 h-14 rounded-lg py-2 px-4"/>
              <div className="loginButtonContainer flex justify-center">
              <button className="bg-blue-500 my-3 py-3 rounded-lg w-4/5 ">Log in</button>
              </div>
            </form>
          </div>
        </div>
    );
}

export default Login;
