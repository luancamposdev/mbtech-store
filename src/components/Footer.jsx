import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
      <p>
        &copy; 2022 MicroCompanny Brasil Technologies - todos os direitos
        reservados
      </p>
      <p className="icons">
        <AiFillGithub />
        <AiFillLinkedin />
      </p>
    </div>
  );
}

export default Footer;
