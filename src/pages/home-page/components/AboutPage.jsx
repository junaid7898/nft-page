import React, { useEffect, useRef, useState } from "react";
import Card from "../../../components/card/Card";
import useIsInViewPort from "../../../hooks/useIsInViewPort";

const AboutPage = () => {
  const [refX, setRefX] = useState(1);
  const ref1 = useRef();
  const isInViewPort = useIsInViewPort(ref1);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log("currentScroll", currentScrollY);
      if (isInViewPort) {
        setRefX(currentScrollY);
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
            style={{ transform: `translate3d(${refX}px, 0, 0)` }}
          >
            {testImages.map((item) => {
              return <Card source={item} type="simple" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
