import Link from "next/link";
import { useRouter } from "next/router";
import navbarStyles from "../styles/Navbar.module.scss";

import { /*FaPhone, FaWhatsapp,*/ FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const currentPath = useRouter().asPath;

  return (
    <nav role="navigation" className={navbarStyles.navbar}>
      <div>
        <img
          className={navbarStyles.logo}
          src="/logo_150.png"
          alt="Halal Alaqsa logo"
          width="150"
          height="150"
        />
      </div>

      <div>
        <ul className={navbarStyles.navLinks}>
          <li onClick={() => {}} className={getNavlinkClass(currentPath, "/")}>
            <Link href="/">Home</Link>
          </li>
          <li
            onClick={() => {}}
            className={getNavlinkClass(currentPath, "/about")}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            onClick={() => {}}
            className={getNavlinkClass(currentPath, "/team")}
          >
            <Link href="/team">Our Team</Link>
          </li>
          <li
            onClick={() => {}}
            className={getNavlinkClass(currentPath, "/get_certified")}
          >
            <Link href="/get_certified">Get Certified</Link>
          </li>
        </ul>
      </div>

      <section role="group" className={navbarStyles.contact}>
        <h2 className={navbarStyles.heading}>Get in touch</h2>
        <main>
          {/* <div>
            <span className={navbarStyles.icon}>
              <FaPhone />
            </span>
            <span className={navbarStyles.icon}>
              <FaWhatsapp />
            </span>
            <p className={navbarStyles.data}>+972 50 712 3652</p>
          </div> */}
          <address className={navbarStyles.meh}>
            <span className={navbarStyles.icon}>
              <FaEnvelope />
            </span>
            <p className={navbarStyles.data}>halalalaqsa@gmail.com</p>
          </address>
        </main>
      </section>
    </nav>
  );
}

const onClickNavLink = () => {};

const getNavlinkClass = (currentPath, link) =>
  currentPath === link
    ? `${navbarStyles.navLink} ${navbarStyles.navLinkActive}`
    : navbarStyles.navLink;
