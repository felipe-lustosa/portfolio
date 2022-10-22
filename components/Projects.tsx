import React from "react";

type Props = {};

const Projects = (props: Props) => {
    const projects = [1, 2, 3, 4, 5];

    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
                {projects.map((project, i) => (
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fugross.gallerycdn.vsassets.io%2Fextensions%2Fugross%2Fvscode-react-snippets%2F1.3.0%2F1519481679046%2FMicrosoft.VisualStudio.Services.Icons.Default&f=1&nofb=1&ipt=c10d099fa70fbd6d1d56d5aaf41fcf63a1d3424dac8cf7d3d3e08e83afe95fe4&ipo=images" />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                UPS clone
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 "></div>
        </div>
    );
};

export default Projects;
