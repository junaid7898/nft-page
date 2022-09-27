import React from "react";
import Card from "../../../components/card/Card";
import FooterRight from "../../../components/footer/subComponents/FooterRight";

const HomePageIntro = () => {
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
    <div className="home__intro--container">
      <div className="home__intro">
        <div className="home__intro--left">
          <h3>
            WELCOME TO THE{" "}
            <span className="home__intro--left-shadow">SWAMP</span>
          </h3>

          <p className="home__intro--txt-main">
            The web3 social swamp where your NFT doubles as your membership
            token to the Cardano Crocs Club.
          </p>

          <p className="home__intro--txt-main">
            The CCC ecosystem is ever-expanding and new experiences are only
            available to CCC members. As the ecosystem grows, members will gain
            access to the Croc Arcade, gaming incubator, online poker game,
            exclusive merch drops, and Swamp-only digital & real-world
            experiences.
          </p>

          <p className="home__intro--txt">
            <span>$C4 policy ID:</span>
            <span>
              a00fdf4fb9ab6c8c2bd1533a2f14855edf12aed5ecbf96d4b5f5b939
            </span>
          </p>
        </div>

        <div className="home__intro--right-container">
          <div className="home__intro--right">
            {testImages.map((item) => {
              return <Card key={item} source={item} type="simple" />;
            })}
          </div>
        </div>

        <FooterRight className="home__intro--bottom" />
      </div>
    </div>
  );
};

export default HomePageIntro;
