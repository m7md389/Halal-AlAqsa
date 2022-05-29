import Link from "next/link";
import { useRouter } from "next/router";
import navbarStyles from "../styles/Navbar.module.scss";

export default function Home() {
  return (
    <nav className={navbarStyles.navbar}>
      <ul className={navbarStyles.navLinks}>
        <li onClick={() => {}} className={getNavlinkClass("/")}>
          <Link href="/">Home</Link>
        </li>
        <li onClick={() => {}} className={getNavlinkClass("/about")}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

const onClickNavLink = () => {};

const getNavlinkClass = (link) => {
  const currentPath = useRouter().asPath;

  if (currentPath === link) {
    return `${navbarStyles.navLink} ${navbarStyles.navLinkActive}`;
  }

  return navbarStyles.navLink;
};
