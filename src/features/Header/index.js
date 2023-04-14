import { useState, useEffect } from "react";
import Search from "./Search";
import {
  StyledHeader,
  Wrapper,
  WrapperSubtitle,
  Title,
  Subtitle,
  Button,
  StyledLink,
} from "./styled";
import { toStuffList } from "../../core/routes";

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
    <StyledHeader>
      <Wrapper isScrolled={isScrolled}>
        <Title>
          <StyledLink to={toStuffList()}>Rent Locally</StyledLink>
        </Title>
        <Search isScrolled={isScrolled} />
        <WrapperSubtitle isScrolled={isScrolled}>
          <Subtitle>Rent, when you're not using,</Subtitle>
          <Subtitle>borrow - if you need and pay only for use</Subtitle>
        </WrapperSubtitle>
        <Button>Menu</Button>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
