"use client";
import useInView from "../useInView"; // Adjust the path as needed

const AnimatedDesc = () => {
    const [ref, isInView] = useInView();

    return (
        <p
            ref={ref}
            className={`
        text-[#ADB7BE] text-base sm:text-lg max-w-xl mb-6
        transition-all duration-1000 ease-out transform
        ${isInView ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-10"}
      `}
        >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
            felis, ultricies nec, pellentesque eu, pretium quis, sem...
        </p>
    );
};

export default AnimatedDesc;