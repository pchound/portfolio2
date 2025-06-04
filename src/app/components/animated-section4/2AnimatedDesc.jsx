"use client";
import useInView from "../useInView"; // Adjust path if needed

const AnimatedDesc = () => {
    const [ref, isInView] = useInView();

    return (
        <p
            ref={ref}
            className={`
         text-[#ADB7BE] mb-4 max-w-md"
        transition-all duration-1000 ease-out transform
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-x-10"}
      `}
        >
            Whether you have a project in mind, a question about my work, or just want to say hi—I'd love to hear from you. I’m always open to meaningful conversations, collaborations, or freelance opportunities. Let’s build something awesome together.

            If you want it to feel more professional or more casual, I can adjust the tone. Want to add something specific—like that you're especially open to startup roles or passionate about clean code? I can include that too.
        </p>
    );
};

export default AnimatedDesc;