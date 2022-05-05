import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
      <p>
        &copy; 2022 MicroCompanny Brasil Technologies - todos os direitos
        reservados
      </p>
      <p className="icons">
        <Link href="https://github.com/luancamposreis">
          <a>
            <AiFillGithub />
          </a>
        </Link>
        <Link href="https://linkedin.com/in/luan-campos-191567113">
          <a>
            <AiFillLinkedin />
          </a>
        </Link>
      </p>
    </div>
  );
}

export default Footer;
