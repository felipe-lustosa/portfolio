import React from "react";
import { motion } from "framer-motion";

type Props = {
    directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
    return (
        <div className="group relative flex cursor-pointer overflow-hidden">
            {/* <motion.img initial={{ x: directionLeft ? -200 : 200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fugross.gallerycdn.vsassets.io%2Fextensions%2Fugross%2Fvscode-react-snippets%2F1.3.0%2F1519481679046%2FMicrosoft.VisualStudio.Services.Icons.Default&f=1&nofb=1&ipt=c10d099fa70fbd6d1d56d5aaf41fcf63a1d3424dac8cf7d3d3e08e83afe95fe4&ipo=images" className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 easy-in-out" /> */}
            <motion.img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fugross.gallerycdn.vsassets.io%2Fextensions%2Fugross%2Fvscode-react-snippets%2F1.3.0%2F1519481679046%2FMicrosoft.VisualStudio.Services.Icons.Default&f=1&nofb=1&ipt=c10d099fa70fbd6d1d56d5aaf41fcf63a1d3424dac8cf7d3d3e08e83afe95fe4&ipo=images" className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 easy-in-out" />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black opacity-100">100%</p>
                </div>
            </div>
        </div>
    );
};

export default Skill;
