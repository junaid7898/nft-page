import React from "react";

const UtilitiesSection = () => {
  const testImages = [
    {
      text: "Premium level membership access",
      img: "https://cardanocrocsclub.com/img/utility/01.png",
    },
    {
      text: "Premium level membership access",
      img: "https://cardanocrocsclub.com/img/utility/02.png",
    },
    {
      text: "Premium level membership access",
      img: "https://cardanocrocsclub.com/img/utility/03.png",
    },
    {
      text: "Premium level membership access",
      img: "https://cardanocrocsclub.com/img/utility/04.png",
    },
    {
      text: "Premium level membership access",
      img: "https://cardanocrocsclub.com/img/utility/05.png",
    },
    {
      text: "Premium level membership access",
      img: "https://cardanocrocsclub.com/img/utility/06.png",
    },
    {
      text: "Premium level membership access",
      img: "https://cardanocrocsclub.com/img/utility/07.png",
    },
    {
      text: "Premium level membership access",
      img: "https://cardanocrocsclub.com/img/utility/08.png",
    },
    {
      text: "Premium level membership access",
      img: "https://cardanocrocsclub.com/img/utility/09.png",
    },
    {
      text: "Premium level membership access",
      img: "https://cardanocrocsclub.com/img/utility/10.png",
    },
    {
      text: "Premium level membership access",
      img: "https://cardanocrocsclub.com/img/utility/11.png",
    },
    {
      text: "Premium level membership access",
      img: "https://cardanocrocsclub.com/img/utility/12.png",
    },
  ];
  return (
    <div className="utilities">
      <div className="utilities--container">
        <p className="utilities--head">
          [<span>utility</span>]
        </p>

        <div className="utilities--item-container">
          {testImages &&
            testImages.map((item, index) => {
              return (
                <div
                  data-aos="fade-up"
                  //   data-aos-offset="600"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  //   data-aos-easing="ease-in-out"
                  //   data-aos-mirror="true"
                  //   data-aos-once="false"
                  //   data-aos-anchor-placement="bottom-bottom"
                  className="utilities--item"
                  key={index}
                >
                  <img src={item.img} alt="Text" />
                  <p>{item.text}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default UtilitiesSection;
