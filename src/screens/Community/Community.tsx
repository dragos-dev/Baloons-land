import "./community.scss";
import { useScroll } from "../../routes/ScrollProvider";
const Community = () => {
  const { communityRef }: any = useScroll();
  return (
    <div className="community" ref={communityRef}>
      <div className="community__container">
        <div className="community__blocks">
          <div className="community__block1">
            <p className="community__block1-text">JOIN TO OUR</p>
          </div>
          <div className="community__block2">
            <p className="community__block2-text">COMMUNITY</p>
          </div>
        </div>
        <div className="community__buttons">
          <div className="community__button">
            <p className="community__button1-text">Telegram</p>
          </div>
          <div className="community__button">
            <p className="community__button-text">Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
