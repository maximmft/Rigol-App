import buddha_logo from "../assets/images/buddha 1.svg";
import "./Header.css";

function Header() {
  return (
    <section className="display-logo-accueil">
    <img src={buddha_logo} alt="logo" className="accueil-logo" />
</section>
  )
}

export default Header