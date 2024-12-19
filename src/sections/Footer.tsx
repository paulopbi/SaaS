import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-black text-[#bcbcbc] text-sm py-10 text-center"
    >
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:absolute before:top-2 before:bottom-0 before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f081,#2fd8fe)] before:w-full before:blur">
          <Image src={logo} alt="Logo image" height={40} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6 ">
          <a href="https://www.linkedin.com/in/paulopbi/" target="_blank">
            About
          </a>
          <a href="https://www.linkedin.com/in/paulopbi/" target="_blank">
            Features
          </a>
          <a href="https://www.linkedin.com/in/paulopbi/" target="_blank">
            Costumers{" "}
          </a>
          <a href="https://github.com/paulopbi" target="_blank">
            Pricing
          </a>
          <a href="https://github.com/paulopbi" target="_blank">
            Help
          </a>
          <a href="https://github.com/paulopbi" target="_blank">
            Careers
          </a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 Paulo Victor, alguns direitos reservados.
        </p>
      </div>
    </footer>
  );
};
