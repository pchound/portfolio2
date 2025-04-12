import Link from "next/link";

const NavLink = ({href, title}) => {
    return (
        <Link
            href={href}
            className="block py-2 pl3 pr-4 text"
        >
            {title}
        </Link>       
    )
}

export default NavLink;