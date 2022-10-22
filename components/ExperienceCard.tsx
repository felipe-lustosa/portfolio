import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top " src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fprofile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034%3Fk%3D6%26m%3D1016744034%26s%3D170667a%26w%3D0%26h%3DrO1167wSKkLSCFER6c7vjmceJrtyutZW6cF8XSX4bmk%3D&f=1&nofb=1&ipt=9510987eae6ed5bc97965ed7d1f58648360fa226b070728ac25a758ce89a81e4&ipo=images" />
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">CEO of LoreIpsum</h4>
                <p className="font-bold text-2xl mt-1">LoreIpsum</p>
                <div className="flex space-x-2 my-2">
                    <img className="h-10 w-10 rounded-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fprofile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034%3Fk%3D6%26m%3D1016744034%26s%3D170667a%26w%3D0%26h%3DrO1167wSKkLSCFER6c7vjmceJrtyutZW6cF8XSX4bmk%3D&f=1&nofb=1&ipt=9510987eae6ed5bc97965ed7d1f58648360fa226b070728ac25a758ce89a81e4&ipo=images" />
                    <img className="h-10 w-10 rounded-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fprofile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034%3Fk%3D6%26m%3D1016744034%26s%3D170667a%26w%3D0%26h%3DrO1167wSKkLSCFER6c7vjmceJrtyutZW6cF8XSX4bmk%3D&f=1&nofb=1&ipt=9510987eae6ed5bc97965ed7d1f58648360fa226b070728ac25a758ce89a81e4&ipo=images" />
                    <img className="h-10 w-10 rounded-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fprofile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034%3Fk%3D6%26m%3D1016744034%26s%3D170667a%26w%3D0%26h%3DrO1167wSKkLSCFER6c7vjmceJrtyutZW6cF8XSX4bmk%3D&f=1&nofb=1&ipt=9510987eae6ed5bc97965ed7d1f58648360fa226b070728ac25a758ce89a81e4&ipo=images" />
                </div>
                <p className="uppercase py-5 text-gray-300">Started work... - Ended...</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Summary pointsSummary points</li>
                    <li>Summary pointsSummary points</li>
                    <li>Summary pointsSummary points</li>
                    <li>Summary pointsSummary points</li>
                    <li>Summary pointsSummary points</li>
                </ul>
            </div>
        </article>
    );
};

export default ExperienceCard;
