import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 25px;
  background-color: #002e25;

  img.shopify-logo {
    width: 111px;
    height: 32px;
  }

  @media only screen and (min-width: 1024px) {
    height: 80px;
    padding: 0 64px;

    img.shopify-logo {
      width: 121px;
      height: 35px;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader className="header">
      <img
        src={require("../assets/shopify_logo_white.png")}
        alt="shopify logo"
        className="shopify-logo"
      />
    </StyledHeader>
  );
};

export default Header;
