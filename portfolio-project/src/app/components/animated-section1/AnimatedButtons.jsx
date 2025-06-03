"use client";
import useInView from "../useInView";

const AnimatedButtons = () => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0"
    >
      {/* Hire Me Button */}
      <div
        className={`
          transition-all duration-700 ease-out transform
          ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-500 to-red-500">
          <span className="block bg-[#121212] hover:bg-slate-800 text-white rounded-full px-6 py-3 cursor-pointer transition-colors duration-300">
            Resume
          </span>
        </button>
      </div>

      {/* Download CV Button */}
      {/* <div
        className={`
          transition-all duration-700 ease-out transform delay-200
          ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
        style={{ transitionDelay: isInView ? "200ms" : "0ms" }}
      >
        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-cyan-400">
          <span className="block bg-[#121212] hover:bg-slate-800 text-white rounded-full px-6 py-3 cursor-pointer transition-colors duration-300">
            Download CV
          </span>
        </button>
      </div>*/}
    </div>
  );
};

export default AnimatedButtons;
