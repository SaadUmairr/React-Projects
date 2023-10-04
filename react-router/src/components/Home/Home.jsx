import React from "react";

function Home() {
    return (
        <main>
            <div className="mainBody flex justify-center items-center z-10">
                <div className="imgMain m-2 w-2/5">
                    <img
                        src="src/assets/main-img.jpg"
                        alt="Main Image"
                        className="w-80 m-3 rounded"
                    />
                </div>
                <div className="imgMainDescription mx-2  w-2/5 flex flex-col justify-between">
                    <p className="text-5xl font-black my-8">
                        PLAN YOUR <span className="text-blue-700">HOLIDAY</span>
                    </p>
                    <p className="font-light leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Rem temporibus error perspiciatis laudantium
                        eveniet laboriosam excepturi voluptatum id? Magni
                        consequatur, dolore commodi tempora ab delectus
                        necessitatibus quisquam illo esse pariatur! Atque nulla
                        rem, excepturi velit possimus nostrum. Fugiat eius fuga
                        saepe nam voluptas eum magnam iure optio itaque
                        doloribus accusamus non enim, accusantium deleniti velit
                        vero similique minima, minus beatae.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Home;
