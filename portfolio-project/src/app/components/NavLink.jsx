import Link from "next/link";

const NavLink = ({ href, title, isActive }) => {
    return (
        <Link
            href={href}
            className={`block py-2 pr-4 pl-3 rounded-md transition duration-300 ${isActive
                ? "bg-gradient-to-r from-orange-400 to-orange-500 text-black"
                : "text-white hover:text-cyan-400"
                }`}
        >
            {title}
        </Link>
    );
};

export default NavLink;
