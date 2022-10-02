import React, { useEffect, useRef, useState } from "react";
import Card from "../../../components/card/Card";
import useIsInViewPort from "../../../hooks/useIsInViewPort";

const AboutPage = () => {
  const [refX, setRefX] = useState(1);
  const ref1 = useRef();
  const isInViewPort = useIsInViewPort(ref1);
  const prevScrollValue = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isInViewPort) {
        setRefX(currentScrollY % prevScrollValue.current);
        console.log("position:", refX);
      } else {
        prevScrollValue.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInViewPort]);

  const testImages = [
    "https://cardanocrocsclub.com/img/top/01.png",
    "https://cardanocrocsclub.com/img/top/02.png",
    "https://cardanocrocsclub.com/img/top/03.webp",
    "https://cardanocrocsclub.com/img/top/04.webp",
    "https://cardanocrocsclub.com/img/top/05.webp",
    "https://cardanocrocsclub.com/img/top/06.webp",
    "https://cardanocrocsclub.com/img/top/07.webp",
    "https://cardanocrocsclub.com/img/top/08.webp",
    "https://cardanocrocsclub.com/img/top/09.webp",
  ];
  return (
    <div className="about-container">
      <div className="about">
        <div className="about--intro">
          {/* //NOTE make a section title component */}
          <h3 className="section--intro">[About Og crocs]</h3>
          <p>
            The Cardano Crocs Club is a collection of only{" "}
            <span className="span-1">7,700 AI</span> generated NFTs
            (non-fungible tokens) that are made up of over{" "}
            <span className="span-2">200 different </span>
            variables. The Crocs collection also includes 32 hand drawn, special
            edition crocs.
          </p>
        </div>

        <div className="about--scroll" ref={ref1}>
          <div
            className="about--scroll-background"
            style={{
              transform: isInViewPort && `translate3d(${refX}px, 0, 0)`,
            }}
          >
            {testImages.map((item) => {
              return (
                <div className="scroll-card">
                  <img
                    src={item}
                    alt="Scroll Card"
                    className="scroll-card--img"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div style={{ minHeight: "5000px" }}></div> */}
    </div>
  );
};

export default AboutPage;
