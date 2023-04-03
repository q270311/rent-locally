import { useState, useEffect } from "react";
import { Wrapper, Subtitle } from "./styled";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper isScrolled={isScrolled}>
      <h1>Rent Locally</h1>
      <Subtitle isScrolled={isScrolled}> Rent, when you're not using,</Subtitle>
      <Subtitle isScrolled={isScrolled}>
        {" "}
        borrow - if you need and pay only for use
      </Subtitle>
    </Wrapper>
  );
};

export default Header;
