import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
    const projects = [1, 2, 3, 4, 5];

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {projects.map((project, i) => (
                    <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img initial={{ y: -300, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1.2 }} viewport={{ once: true }} className="h-64 max-w-96 object-cover" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.tmimgcdn.com%2Fscr%2F45000%2F45042_01_home_original_1200.jpg%3Fwidth%3D1000&f=1&nofb=1&ipt=2fa34e57f637df6ef2017f1fbf0aae18ad71fb2b4c5a96d3852cee34619f5a77&ipo=images" />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                UPS clone
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 "></div>
        </motion.div>
    );
};

export default Projects;
