import Link from "next/link";
import { useRouter } from "next/router";
import navbarStyles from "../styles/Navbar.module.scss";

import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const currentPath = useRouter().asPath;

  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.grid}>
        <section role="logo" className={navbarStyles.logoContainer}>
          <img
            className={navbarStyles.logo}
            src="https://i.pinimg.com/originals/4c/f0/23/4cf02399d028dd1a013faaa9b80477b5.png"
            alt="Halal Alaqsa logo"
          />
        </section>

        <section role="navbar links">
          <ul className={navbarStyles.navLinks}>
            <li
              onClick={() => {}}
              className={getNavlinkClass(currentPath, "/")}
            >
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
        </section>

        <section role="contact" className={navbarStyles.contact}>
          <h2 className={navbarStyles.heading}>Get in touch</h2>
          <main>
            <section role="phone">
              <span className={navbarStyles.icon}>
                <FaPhone />
              </span>
              <span className={navbarStyles.icon}>
                <FaWhatsapp />
              </span>
              <p className={navbarStyles.data}>+972 50 712 3652</p>
            </section>
            <section role="email">
              <span className={navbarStyles.icon}>
                <FaEnvelope />
              </span>
              <p className={navbarStyles.data}>contact-us@halal-alaqsa.com</p>
            </section>
          </main>
        </section>
      </div>
    </nav>
  );
}

const onClickNavLink = () => {};

const getNavlinkClass = (currentPath, link) =>
  currentPath === link
    ? `${navbarStyles.navLink} ${navbarStyles.navLinkActive}`
    : navbarStyles.navLink;
