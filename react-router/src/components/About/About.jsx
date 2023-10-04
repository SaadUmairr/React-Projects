import React from "react";
import picA from "../../assets/about-1.jpg";
import picB from "../../assets/about-2.jpg";

function About() {
    return (
        <div className="aboutInfoContainer flex justify-center mt-5">
            <div className="img1Box w-1/3">
                <img
                    src={picA}
                    alt="Picture of a city"
                    className="w-80 rounded-lg ml-4 opacity-50 hover:opacity-100 duration-200"
                />
            </div>
            <div className="aboutDescription w-1/3 flex justify-evenly flex-col">
                <p className="text-7xl font-bold">ABOUT US</p>
                <p className="text-sm leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore alias libero at obcaecati nobis commodi!
                    Excepturi, at architecto autem consequatur quia vel beatae
                    obcaecati praesentium corrupti maxime quam possimus
                    officiis? In enim, modi voluptatibus culpa sunt corporis
                    maiores ad libero sapiente quisquam porro impedit
                    consequatur perferendis. Minima, amet quisquam ratione vero
                    accusantium nobis aliquam laudantium eligendi commodi
                    excepturi error sequi! Suscipit quas, facilis nam iure
                    commodi tempora dolore dolor ipsum nesciunt laudantium dicta
                    porro incidunt assumenda pariatur soluta cum aliquid dolorum
                    quis ex! Voluptas porro, similique odio laudantium quibusdam
                    incidunt.
                </p>
            </div>
            <div className="img2Box w-1/3">
                <img
                    src={picB}
                    alt="pic"
                    className="w-80 rounded-lg mx-4 opacity-50 hover:opacity-100 duration-200"
                />
            </div>
        </div>
    );
}

export default About;
