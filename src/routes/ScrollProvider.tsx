import React, { createContext, useContext, useEffect, useRef, useState, MutableRefObject } from "react";

interface ScrollContextProps {
  aboutRef: MutableRefObject<HTMLElement | null>;
  communityRef: MutableRefObject<HTMLElement | null>;
  roadmapRef: MutableRefObject<HTMLElement | null>;
  minigamesRef: MutableRefObject<HTMLElement | null>;
  nftRef: MutableRefObject<HTMLElement | null>;
  linksRef: MutableRefObject<HTMLElement | null>;
  activeBlock: number;
  setActiveBlock: React.Dispatch<React.SetStateAction<number>>;
  setIsScrolling: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScrollContext = createContext<ScrollContextProps | null>(null);

export const ScrollProvider = ({ children }: any) => {
  const aboutRef = useRef<HTMLElement | null>(null);
  const communityRef = useRef<HTMLElement | null>(null);
  const roadmapRef = useRef<HTMLElement | null>(null);
  const minigamesRef = useRef<HTMLElement | null>(null);
  const nftRef = useRef<HTMLElement | null>(null);
  const linksRef = useRef<HTMLElement | null>(null);
  
  const [activeBlock, setActiveBlock] = useState(1);
  const [prevActiveBlock, setPrevActiveBlock] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    setPrevActiveBlock(activeBlock);
  }, [activeBlock]);

  useEffect(() => {
    let startY = 0;
    let isTouchDevice = false;
  
    const handleTouchStart = (event: TouchEvent) => {
      startY = event.touches[0].clientY;
      isTouchDevice = true;
    };
  
    const handleTouchMove = (event: TouchEvent) => {
      if (!isTouchDevice) return;
  
      const currentY = event.touches[0].clientY;
      const deltaY = startY - currentY; 
  
      if (!isScrolling && Math.abs(deltaY) > 50) {
        setIsScrolling(true);
  
        if (deltaY > 0 && activeBlock < 22) {
          setActiveBlock((prev) => prev + 1);
        } else if (deltaY < 0 && activeBlock > 1) {
          setActiveBlock((prev) => prev - 1);
        }
  
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };
  
    const handleWheel = (event: WheelEvent) => {
      if (isTouchDevice) return; 
  
      if (!isScrolling) {
        setIsScrolling(true);
  
        if (event.deltaY > 0 && activeBlock < 22) {
          setActiveBlock((prev) => prev + 1);
        } else if (event.deltaY < 0 && activeBlock > 1) {
          setActiveBlock((prev) => prev - 1);
        }
  
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };
  
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("wheel", handleWheel);
  
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeBlock, isScrolling]);
  


  useEffect(() => {
    let position : any;
    switch (activeBlock) {
      case 1:
        position = 0;
        break;
      case 2:
        position = 500;
        break;
      case 3:
        position = 500;
        break;
      case 4:
        position = 1200;
        break;
      case 5:
        if (aboutRef.current) {
          position = aboutRef.current.getBoundingClientRect().top + window.scrollY;
        } else {
          position = 0;
        }
        break;
      case 6:
        if (aboutRef.current) {
          position = aboutRef.current.getBoundingClientRect().top + window.scrollY + 750;
        } else {
          position = 0;
        }
        break;
      case 7:
        if (aboutRef.current) {
          position = aboutRef.current.getBoundingClientRect().top + window.scrollY + 1350;
        } else {
          position = 0;
        }
        break;
      case 8:
        if (aboutRef.current) {
          position = aboutRef.current.getBoundingClientRect().top + window.scrollY + 2550;
        } else {
          position = 0;
        }
        break;
      case 9:
        if (roadmapRef.current) {
          position = roadmapRef.current.getBoundingClientRect().top + window.scrollY - 250;
        } else {
          position = 0;
        }
        break;
      case 10:
        if (roadmapRef.current) {
          position = roadmapRef.current.getBoundingClientRect().top + window.scrollY + 390;
        } else {
          position = 0;
        }
        break;
      case 11:
        if (roadmapRef.current) {
          position = roadmapRef.current.getBoundingClientRect().top + window.scrollY + 1030;
        } else {
          position = 0;
        }
        break;
      case 12:
        if (roadmapRef.current) {
          position = roadmapRef.current.getBoundingClientRect().top + window.scrollY + 1730;
        } else {
          position = 0;
        }
        break;
      case 13:
        if (roadmapRef.current) {
          position = roadmapRef.current.getBoundingClientRect().top + window.scrollY + 2400;
        } else {
          position = 0;
        }
        break;
      case 14:
        if (roadmapRef.current) {
          position = roadmapRef.current.getBoundingClientRect().top + window.scrollY + 3100;
        } else {
          position = 0;
        }
        break;
      case 15:
        if (roadmapRef.current) {
          position = roadmapRef.current.getBoundingClientRect().top + window.scrollY + 3780;
        } else {
          position = 0;
        }
        break;
      case 16:
        if (roadmapRef.current) {
          position = roadmapRef.current.getBoundingClientRect().top + window.scrollY + 4450;
        } else {
          position = 0;
        }
        break;
      case 17:
        position = 13800;
        break;
      case 18:
        position = 13800;
        break;
      case 19:
        position = 14750;
        break;
      case 20:
        position = 15600;
        break;
      case 21:
        if (nftRef.current) {
          if (prevActiveBlock <= 20) {
              position = nftRef.current.getBoundingClientRect().top + window.scrollY - 270;
            } else {
              position = nftRef.current.getBoundingClientRect().top + window.scrollY;
            }
        } else {
          position = 15600;
        }
        break;
      case 22:
        position = 200000;
        break;
      default:
        position = 0;
        break;
    }

    window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    }, [activeBlock]);

    useEffect(() => {
      const mapWrapperElement = document.querySelector('.welcome__map-wrapper') as HTMLElement;
      const imgElement = document.querySelector('.welcome__map-img') as HTMLElement;

      if (activeBlock === 2 || activeBlock === 3) {
        mapWrapperElement.style.transform = 'rotate(-3.75deg) scale(1.7)';
        mapWrapperElement.style.height = '100vh';
        mapWrapperElement.style.width = '70vw';
        imgElement.style.height = '100vh';
        imgElement.style.width = '70vw';
      } else if (activeBlock === 4) {
        mapWrapperElement.style.height = '900px';
        mapWrapperElement.style.width = '1228px';
        mapWrapperElement.style.transform = 'rotate(-8deg)';
        imgElement.style.height = '900px';
        imgElement.style.width = '1228px';
      } else {
        mapWrapperElement.style.transform = 'rotate(0deg)';
        mapWrapperElement.style.height = '900px';
        mapWrapperElement.style.width = '1228px';
        imgElement.style.height = '900px';
        imgElement.style.width = '1228px';
      }
    }, [activeBlock]);


  return (
    <ScrollContext.Provider
      value={{
        aboutRef,
        communityRef,
        roadmapRef,
        minigamesRef,
        nftRef,
        linksRef,
        activeBlock,
        setActiveBlock,
        setIsScrolling,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
