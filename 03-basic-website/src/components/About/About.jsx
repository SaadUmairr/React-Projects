import React from "react";
import picA from "../../assets/about/about-1.jpg";
import picB from "../../assets/about/about-2.jpg";
import picC from "../../assets/about/about-3.jpg";
import picD from "../../assets/about/about-4.jpg";
import twitter from "../../assets/socials/twitterx.svg";
import youtube from "../../assets/socials/youtube.svg";
import instagram from "../../assets/socials/instagram.svg";
import fb from "../../assets/socials/fb.svg";

function About() {
    return (
        <div className="flex ">
            <div className="imageSection w-3/5 mt-5">
                <div className="firstRow flex justify-evenly mb-4">
                    <img
                        src={picA}
                        alt="Picture A"
                        className="w-1/4  rounded-lg"
                    />
                    <img
                        src={picB}
                        alt="Picture B"
                        className="w-1/4  rounded-lg"
                    />
                </div>
                <div className="secondRow  flex justify-evenly">
                    <img
                        src={picC}
                        alt="Picture C"
                        className="w-1/4  rounded-lg"
                    />
                    <img
                        src={picD}
                        alt="Picture D"
                        className="w-1/4  rounded-lg"
                    />
                </div>
            </div>
            <div className="aboutSectionDescription w-1/3 mt-5">
                <div className="heading text-5xl font-bold mx-5 ">
                    <p className="text-center">ABOUT US</p>
                </div>
                <div className="description m-5 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi quasi corrupti alias, totam, reiciendis aspernatur
                    nulla atque accusamus officiis quod molestias ea aperiam
                    quam. Veritatis, delectus quaerat. Hic, fugit quo? Culpa
                    iste iure possimus odit mollitia saepe laudantium hic
                    eveniet natus blanditiis ratione itaque, nisi aliquid
                    voluptates accusantium eos in eaque vero praesentium?
                    Reiciendis voluptate iure laborum explicabo autem expedita.
                    Ad, quae autem pariatur aperiam omnis eos voluptatum qui.
                    Eligendi perspiciatis repudiandae, non iste rerum saepe quod
                    doloremque molestiae consectetur cum eum mollitia autem?
                    Maxime quibusdam debitis eius explicabo. Voluptates?
                </div>
                <div className="socials  text-5xl font-bold mx-5">
                    <p className="text-center mt-16 ">SOCIALS</p>
                    <div className="socialIcons flex mt-8 justify-center">
                        <img src={twitter} alt="twitter" className="w-9 my-5 mr-6 active:scale-95" />
                        <img src={instagram} alt="instagram" className="w-9 my-5 mr-6 active:scale-95" />
                        <img src={youtube} alt="youtube" className="w-9 my-5 mr-6 active:scale-95" />
                        <img src={fb} alt="facebook" className="w-9 my-5 mr-6 active:scale-95" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
