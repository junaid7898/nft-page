export const handleNavOpen = (
  menuLogoRef,
  navLinksRef,
  headerBackgroundRef
) => {
  let iconChild = menuLogoRef.current.childNodes;
  if (
    navLinksRef.current.classList.contains("header-links__container-active")
  ) {
    navLinksRef.current.classList.remove("header-links__container-active");
    iconChild[0].classList.remove("menu--top-active", "menu--top-black");
    iconChild[1].classList.remove("menu--bottom-active", "menu--bottom-black");

    iconChild[0].classList.add("menu--top-white");
    iconChild[1].classList.add("menu--bottom-white");

    headerBackgroundRef.current.classList.remove("header-container--pink");
    document
      .getElementById("sound-check")
      .classList.remove("sound-logo--primary");

    document
      .getElementById("sound-check")
      .classList.add("sound-logo--original");
  } else {
    navLinksRef.current.classList.add("header-links__container-active");
    iconChild[0].classList.add("menu--top-active", "menu--top-black");
    iconChild[1].classList.add("menu--bottom-active", "menu--bottom-black");

    iconChild[0].classList.remove("menu--top-white");
    iconChild[1].classList.remove("menu--bottom-white");
    headerBackgroundRef.current.classList.add("header-container--pink");
    document.getElementById("sound-check").classList.add("sound-logo--primary");

    document
      .getElementById("sound-check")
      .classList.remove("sound-logo--original");
  }
};
