import cn from "classnames";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import "./appearing-container.sass";

type Props = {
  time?: number;
  delay?: number;
  offset?: number;
  children: React.ReactNode;
};

const AppearingContainer: FC<Props> = ({ time, delay, offset, children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const position =
      document.body.scrollTop || document.documentElement.scrollTop;
    const screenCenter = window.innerHeight / 2;
    setScrollPosition(position + screenCenter);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (boxRef.current && !scrolled) {
      const pos =
        boxRef.current.getBoundingClientRect().top +
        window.scrollY +
        (offset || 0);

      if (pos <= scrollPosition) {
        setTimeout(() => {
          setScrolled(true);
        }, delay || 0);
      }
    }
  }, [scrollPosition, boxRef]);

  return (
    <div className={cn("appear-container", { visible: scrolled })} ref={boxRef}>
      {children}
    </div>
  );
};

export default AppearingContainer;
