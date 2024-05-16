import buddha_logo from "../assets/images/buddha 1.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <section className="display-logo-accueil">
    <img src={buddha_logo} alt="logo" className="accueil-logo" onClick={handleNavigate}/>
</section>
  )
}

export default Header