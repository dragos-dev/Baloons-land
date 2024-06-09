import "./minigames.scss";
import { useScroll } from "../../routes/ScrollProvider";
import {
  motion,
  useTransform,
  useScroll as useScrollFramer,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Minigames = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScrollFramer({
    target: targetRef,
  });
  const [widthBlock, setWidthBlock] = useState(0);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${widthBlock}px`]);
  const { minigamesRef, activeBlock }: any = useScroll();

  useEffect(() => {
    const width = document.querySelector(
      ".minigames__background"
    ) as HTMLElement | null;
    setWidthBlock((width?.offsetWidth ?? 0) * 0.5);
  }, []);

  return (
    <div className="minigames-wrapper" ref={targetRef}>
      <div className="minigames" ref={minigamesRef}>
        <motion.div 
          animate={{
            opacity: activeBlock >= 18 ? 1 : 0
          }} 
          transition={{ duration: 1 }}
          style={{ x }} 
          className="minigames__background">
          <div className="minigames__container">
            <h1 className="minigames__title">PLAY MINIGAMES</h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Minigames;
