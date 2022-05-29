import navbarStyles from "../styles/Navbar.module.scss";

export default function Home() {
  return (
    <nav className={navbarStyles.navbar}>
      <ul className={navbarStyles.navLinks}>
        <li className={navbarStyles.navLink}>Home</li>
        <li className={navbarStyles.navLink}>About</li>
      </ul>
    </nav>
  );
}
