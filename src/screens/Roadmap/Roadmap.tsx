import "./roadmap.scss";
import Image from "next/image";
import fireBg from "../../assets/Roadmap/fireBackground.svg";
import fire from "../../assets/Roadmap/fire.svg";
import likeBg from "../../assets/Roadmap/likeBackground.svg";
import like from "../../assets/Roadmap/like.svg";
import headBg from "../../assets/Roadmap/headBackground.svg";
import head from "../../assets/Roadmap/head.svg";
import starBg from "../../assets/Roadmap/starBackground.svg";
import star from "../../assets/Roadmap/star.svg";
import heartBg from "../../assets/Roadmap/heartBackground.svg";
import heart from "../../assets/Roadmap/heart.svg";
import whaleBg from "../../assets/Roadmap/whaleBackground.svg";
import whale from "../../assets/Roadmap/whale.svg";
import pepeBg from "../../assets/Roadmap/pepeBackground.svg";
import pepe from "../../assets/Roadmap/pepe.svg";
import frame from "../../assets/Top.svg";
import { useScroll } from "../../routes/ScrollProvider";
import { motion } from "framer-motion";

const Roadmap = () => {
  const { roadmapRef, activeBlock }: any = useScroll();
  // 9
  return (
    <motion.div className="roadmap" ref={roadmapRef}
      animate={{
        opacity: activeBlock >= 9 ? 1 : 0,
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="roadmap__background">
        <div className="roadmap__container">
          <h1 className="roadmap__title">Roadmap</h1>

          <div className="roadmap__point1">
            <div className="roadmap__point1-number">1</div>
            <div className="roadmap__point1-container">
              <div className="roadmap__point1-images">
                <Image src={fireBg} alt="" className="roadmap__point1-bg" />
                <Image src={fire} alt="" className="roadmap__point1-img" />
              </div>
              <p className="roadmap__point1-text">
                Marketing
                <br />
                Campaign
              </p>
            </div>
          </div>
          <div className="roadmap__point2">
            <div className="roadmap__point2-number">2</div>
            <div className="roadmap__point2-container">
              <p className="roadmap__point2-text">PresalE</p>
              <div className="roadmap__point2-images">
                <Image src={likeBg} alt="" className="roadmap__point2-bg" />
                <Image src={like} alt="" className="roadmap__point2-img" />
              </div>
            </div>
          </div>
          <div className="roadmap__point3">
            <div className="roadmap__point3-number">3</div>
            <div className="roadmap__point3-container">
              <div className="roadmap__point3-images">
                <Image src={headBg} alt="" className="roadmap__point3-bg" />
                <Image src={head} alt="" className="roadmap__point3-img" />
              </div>
              <p className="roadmap__point3-text">
                Launch
                <br />
                Token
              </p>
            </div>
          </div>
          <div className="roadmap__point4">
            <div className="roadmap__point4-number">4</div>
            <div className="roadmap__point4-container">
              <p className="roadmap__point4-text">
                Mini Games
                <br />
                in Webapp
                <br />
                TelEgram
              </p>
              <div className="roadmap__point4-images">
                <Image src={starBg} alt="" className="roadmap__point4-bg" />
                <Image src={star} alt="" className="roadmap__point4-img" />
              </div>
            </div>
          </div>
          <div className="roadmap__point5">
            <div className="roadmap__point5-number">5</div>
            <div className="roadmap__point5-container">
              <div className="roadmap__point5-images">
                {" "}
                <Image src={heartBg} alt="" className="roadmap__point5-bg" />
                <Image src={heart} alt="" className="roadmap__point5-img" />
              </div>
              <p className="roadmap__point5-text">
                NFT
                <br />
                ColLection
              </p>
            </div>
          </div>
          <div className="roadmap__point6">
            <div className="roadmap__point6-number">6</div>
            <div className="roadmap__point6-container">
              <p className="roadmap__point6-text">
                Sniper Bot
                <br />
                on Ton
                <br />
                Network
              </p>
              <div className="roadmap__point6-images">
                <Image src={whaleBg} alt="" className="roadmap__point6-bg" />
                <Image src={whale} alt="" className="roadmap__point6-img" />
              </div>
            </div>
          </div>
          <div className="roadmap__point7">
            <div className="roadmap__point7-number">7</div>
            <div className="roadmap__point7-container">
              <div className="roadmap__point7-images">
                <Image src={pepeBg} alt="" className="roadmap__point7-bg" />
                <Image src={pepe} alt="" className="roadmap__point7-img" />
              </div>
              <p className="roadmap__point7-text">
                BalLoons
                <br />
                Land Labs
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Roadmap;
