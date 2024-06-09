import { motion } from "framer-motion";
import "./checkPoint.scss";

const CheckPoint = ({
  text,
  className,
  onClick,
  initialOpacity = 0,
  initialScale = 0.5,
  initialRotate = 0
}: {
  text: string;
  className: string;
  onClick: () => void;
  initialOpacity?: number;
  initialScale?: number;
  initialRotate?: number;
}) => {
  return (
    <motion.div
      className={`${className}`}
      onClick={onClick}
      animate={{ opacity: initialOpacity, scale: initialScale, rotate: initialRotate }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.2 }}
    >
      <div className="checkPoint">
        <div className="checkPoint__container">
          <p className="checkPoint__text">{text}</p>
        </div>

        <div className="checkPoint__triangle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="61"
            viewBox="0 0 36 61"
            fill="none"
          >
            <path
              d="M33.984 2.00001L18 55.2798L2.01605 2L33.984 2.00001Z"
              fill="#FF8993"
              stroke="#4E0007"
              strokeWidth="3"
            />
          </svg>
        </div>

        <div className="checkPoint__circle"></div>
      </div>
    </motion.div>
  );
};

export default CheckPoint;

