import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="block py-2 pr-4 pl-3 rounded-md transition duration-300 text-white hover:text-cyan-400"
        >
            {title}
        </Link>
    );
};

export default NavLink;


