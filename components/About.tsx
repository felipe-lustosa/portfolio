import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
    return (
        <motion.div initial={{ opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ opacity: 1 }} className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
            <motion.img initial={{ x: -200, opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fprofile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034%3Fk%3D6%26m%3D1016744034%26s%3D170667a%26w%3D0%26h%3DrO1167wSKkLSCFER6c7vjmceJrtyutZW6cF8XSX4bmk%3D&f=1&nofb=1&ipt=9510987eae6ed5bc97965ed7d1f58648360fa226b070728ac25a758ce89a81e4&ipo=images" className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]" />

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background
                </h4>
                <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </motion.div>
    );
};

export default About;
