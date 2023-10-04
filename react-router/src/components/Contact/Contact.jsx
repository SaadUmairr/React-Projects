import React from "react";
import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import address from "../../assets/address.svg";


function Contact() {
    return (
        <div className="contactInfoContainer flex flex-wrap justify-center items-center mt-32">
            <div className="userContactDetails flex flex-col w-1/4 m-4 border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <label htmlFor="name">
                    <input
                        type="text"
                        className="bg-gray-100 h-12 w-full  p-2 my-2 rounded-lg border border-gray-600"
                        placeholder="Full Name"
                    />
                </label>
                <label htmlFor="email">
                    <input
                        type="email"
                        className="bg-gray-100 h-12 w-full p-2 my-2 rounded-lg border border-gray-600"
                        placeholder="Your email"
                    />
                </label>
                <label htmlFor="phone">
                    <input
                        type="number"
                        className="bg-gray-100 h-12 w-full p-2 my-2 rounded-lg border border-gray-600"
                        placeholder="Your Phone number"
                    />
                </label>
                <button className="bg-blue-700 mt-2 py-3 rounded font-bold text-white active:scale-95">
                    SUBMIT
                </button>
            </div>

            <div className="oruContactDetails m-4 border border-gray-500 p-4 rounded-lg">
                <p className="text-2xl font-black text-center">GET IN TOUCH</p>

                <div className="addressDetail flex justify-between items-center mt-3">
                    <img src={address} alt="Address:" width={20}  className="mr-4"/>
                    <p className="text-sm">204, Jasola Tower-A, Delhi-110026</p>
                </div>                
                <div className="phoneDetail flex justify-between items-center mt-3">
                    <img src={phone} alt="Address:" width={20}  className="mr-4"/>
                    <p className="text-sm text-center">+91-9812983467</p>
                </div>                
                <div className="emailDetail flex justify-between items-center mt-3">
                    <img src={email} alt="Address:" width={20}  className="mr-4"/>
                    <p className="text-sm">contact@tripmaker.com</p>
                </div>                
            </div>
        </div>
    );
}

export default Contact;
