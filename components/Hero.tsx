import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, The name's Felipe Lustosa", "Guy-who-loves-coffe.tsx", "<ButLovesToCodeMore />"],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fprofile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034%3Fk%3D6%26m%3D1016744034%26s%3D170667a%26w%3D0%26h%3DrO1167wSKkLSCFER6c7vjmceJrtyutZW6cF8XSX4bmk%3D&f=1&nofb=1&ipt=9510987eae6ed5bc97965ed7d1f58648360fa226b070728ac25a758ce89a81e4&ipo=images" />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
