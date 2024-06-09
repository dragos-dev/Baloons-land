import "./nft.scss";
import man from "../../assets/NFT/man.png";
import icon1 from "../../assets/NFT/icon1.png";
import icon2 from "../../assets/NFT/icon2.png";
import icon3 from "../../assets/NFT/icon3.png";
import icon4 from "../../assets/NFT/icon4.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll } from "../../routes/ScrollProvider";

const NFT = () => {
  const { nftRef, activeBlock }: any = useScroll();
  return (
    <motion.div className="nft" ref={nftRef}
      animate={{
        scale: activeBlock >= 21 ? 1 : 0.5
      }}
      transition={{ duration: 0.7 }}
    >
      <div className="nft__container">
        <h1 className="nft__title">NFT</h1>

        <div className="nft__images">
          <Image src={man} alt="" className="nft__images-man" />
          <Image src={icon1} alt="" className="nft__images-icon1" />
          <Image src={icon2} alt="" className="nft__images-icon2" />
          <Image src={icon3} alt="" className="nft__images-icon3" />
          <Image src={icon4} alt="" className="nft__images-icon4" />
        </div>
      </div>
    </motion.div>
  );
};

export default NFT;
