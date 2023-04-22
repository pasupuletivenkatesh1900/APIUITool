import "./CSS/navbar.css";
import companyLogo from '../1024px-Creditsafe_Logo.svg.png';
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={companyLogo} alt="Credisafe Logo" />
      </div>
      <div className="nav-text">Quality Assurance</div>
    </div>
  );
};
export default NavBar;
