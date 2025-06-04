import React from "react";

const ProjectTag = ({ name, onclick, isSelected }) => {
    const buttonStyles = isSelected
    ? "text-white bg-purple-500"
    : "text-[#ADB7BE] border-slate-600"

    return(
        <button 
            className={`${buttonStyles} rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer`}
            onClick={() => onclick(name)}
        >
            {name}
        </button>
    );
};

export default ProjectTag