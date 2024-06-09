import "./about.scss";
import Image from "next/image";
import man from "../../assets/About/man.svg";
import { useScroll } from "../../routes/ScrollProvider";
import { motion } from "framer-motion";

const About = () => {
  const { aboutRef, activeBlock } : any = useScroll();

  const activeAbout = activeBlock >= 5 ? true : false

  return (
    <motion.div className="about" ref={aboutRef} 
    animate={{
      opacity: activeAbout ? 1 : 0,
      y: activeAbout ? 10 : 0
    }}
      transition={{ duration: 1 }}
    >
      <div className="about__container">
        <div className="about__text">
          <h1 className="about__title">
            Let’s begin the
            <br />
            adventure
          </h1>
          <p className="about__description">About balloon land</p>
        </div>
        <div className="about__facts">
          <Image src={man} alt="" className="about__facts-img" />
          <div className="about__fact1">
            <p className="about__fact1-text">
              Balloons Land is a city where balloons live and every corner of
              this metropolis is important in its own way.
            </p>
          </div>
          <div className="about__fact2">
            <p className="about__fact2-text">
              The new Mayor of the city has come to develop it and he started
              with the local currency $BALLOON, which will be used throughout
              the ecosystem of this colorful place.
            </p>
          </div>
          <div className="about__fact3">
            <p className="about__fact3-text">
              New and old residents of Balloons Land will be able to use
              $BALLOON in mini-games where the player can win more $BALLOON
              tokens, $TON, NFT and more.
            </p>
          </div>
          <div className="about__fact4">
            <p className="about__fact4-text">
              Also in the metropolis is developing and technical department,
              where each user will be able to use high quality technology to
              trade tokens on $TON, as well as for holding a certain amount of
              $BALLOON analysts of our city will guide you.
            </p>
          </div>
        </div>
      </div>

      <div className="about__banner">
        <div className="about__banner-container">
          <p className="about__banner-text">
            This is just a small part of what the new Mayor is going to realize.
            Be the first to be a part of Balloons Land!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
