import "./welcome.scss";
import Image from "next/image";
import map from "../../assets/Welcome/map.png";
import CheckPoint from "@/components/CheckPoint/CheckPoint";
import { useScroll } from "./../../routes/ScrollProvider";
import { motion } from "framer-motion";
import baloonsLand from '@/assets/Welcome/balloonsLand.svg'

const Welcome = () => {
  const { setActiveBlock, activeBlock } : any = useScroll();

  const scrollTo = (block: number) => {
    setActiveBlock(block)
  };

  return (
    <div className="welcome">
      <div className="welcome__container">
        <h1 className="welcome__title">
          Boom shakalak!
          <br />
          Let’s get started.
        </h1>

        <div className="welcome__map">
          <div className="welcome__map-signs" style={{ opacity: activeBlock >= 2 ? 0 : 1 }}>
            <div className="welcome__map-sign1">scroll down to tear </div>
            <div className="welcome__map-sign2">into the adventure</div>
          </div>
          <div className="welcome__map-wrapper">
            <Image src={map} alt="" className="welcome__map-img" />
            <CheckPoint
              text="Roadmap"
              className="checkRoadmap"
              onClick={() => scrollTo(9)}
              initialOpacity={activeBlock >= 3 ? 1 : 0}
              initialScale={activeBlock >= 3 ? 1 : 0}
              initialRotate={activeBlock >= 3 ? 0 : -10}
            />
            <CheckPoint
              text="NFT"
              className="checkNft"
              onClick={() => scrollTo(21)}
              initialOpacity={activeBlock >= 3 ? 1 : 0}
              initialScale={activeBlock >= 3 ? 1 : 0}
              initialRotate={activeBlock >= 3 ? 0 : 10}
            />
            <CheckPoint
              text="About"
              className="checkAbout"
              onClick={() => scrollTo(5)}
              initialOpacity={activeBlock >= 3 ? 1 : 0}
              initialScale={activeBlock >= 3 ? 1 : 0}
              initialRotate={activeBlock >= 3 ? 0 : 10}
            />
            <CheckPoint
              text="Minigames"
              className="checkMinigames"
              onClick={() => scrollTo(18)}
              initialOpacity={activeBlock >= 3 ? 1 : 0}
              initialScale={activeBlock >= 3 ? 1 : 0}
              initialRotate={activeBlock >= 3 ? 0 : -10}
            />
            <div className="checkSocial">
              <motion.div
                className="balloons"
                style={{ maxWidth: '180px' }}
                animate={{ opacity: activeBlock >= 3 ? 1 : 0, scale: activeBlock >= 3 ? 1 : 0, rotate: activeBlock >= 3 ? 0 : -10 }}
              >
                <Image src={baloonsLand} alt='Balloons Land' style={{ maxWidth: '100%' }} />
              </motion.div>
              <motion.div
                className="checkLink__container"
                onClick={() => scrollTo(5)}
                animate={{ opacity: activeBlock >= 3 ? 1 : 0, scale: activeBlock >= 3 ? 1 : 0, rotate: activeBlock >= 3 ? 0 : -10 }}
              >ABOUT</motion.div>
              <motion.div
                className="checkLink__container"
                onClick={() => scrollTo(9)}
                animate={{ opacity: activeBlock >= 3 ? 1 : 0, scale: activeBlock >= 3 ? 1 : 0, rotate: activeBlock >= 3 ? 0 : -10 }}
              >ROADMAP</motion.div>
              <motion.div
                className="checkLink__container"
                onClick={() => scrollTo(18)}
                animate={{ opacity: activeBlock >= 3 ? 1 : 0, scale: activeBlock >= 3 ? 1 : 0, rotate: activeBlock >= 3 ? 0 : -10 }}
              >MINIGAMES</motion.div>
              <motion.div
                className="checkLink__container"
                onClick={() => scrollTo(21)}
                animate={{ opacity: activeBlock >= 3 ? 1 : 0, scale: activeBlock >= 3 ? 1 : 0, rotate: activeBlock >= 3 ? 0 : -10 }}
              >NFT</motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
