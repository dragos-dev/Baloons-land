import "./navigation.scss";
import Image from "next/image";
import logo from "../../assets/Navigation/logo.svg";
import telegram from "../../assets/Navigation/telegram.svg";
import twitter from "../../assets/Navigation/twitter.svg";
import { useScroll } from "@/routes/ScrollProvider";

const Navigation = () => {
  const { setActiveBlock } : any = useScroll();

  return (
    <div className="navigation">
      <div className="navigation__container">
        <div className="navigation__buttons">
          <Image src={telegram} alt="" className="navigation__buttons-img" />
          <Image src={twitter} alt="" className="navigation__buttons-img" />
        </div>
        <div className="navigation__logo">
          <Image src={logo} alt="" className="navigation__logo-img" />
        </div>
        <p onClick={() => setActiveBlock(22)} className="navigation__contacts">contacts</p> 
      </div>
    </div>
  );
};

export default Navigation;
