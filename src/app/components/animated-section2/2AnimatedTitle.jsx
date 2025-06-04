"use client";
import useInView from "../useInView"; // Adjust the path as needed

const AnimatedTitle = () => {
    const [ref, isInView] = useInView();

    return (
        <div
            className={`relative bg-center bg-no-repeat bg-contain transition-all duration-1000 ease-out transform 
                ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}

            style={{
                backgroundImage: `url('pattern10.png')`, // your SVG
                backgroundSize: '1000px 1000px',
                WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
                maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                maskRepeat: 'no-repeat',
                maskSize: '100% 100%',
                borderRadius: '100%',
            }}

        >
            <h1
                ref={ref}
                className={`text-7xl font-bold text-white mb-4 text-center py-12
            transition-all duration-1000 ease-out transform
            ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]`}
            >
                ABOUT<br />ME
            </h1>
        </div>

    );
};

export default AnimatedTitle;
