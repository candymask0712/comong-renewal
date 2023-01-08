import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 65px;
  position: fixed;
  top: 0;
  font-family: roboto;
  background-color: red;
`;

const LogoContainer = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 15px;
  vertical-align: middle;
`;

const Logo = styled.a`
  font-size: 30px;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo href='/'>COMONG</Logo>
      </LogoContainer>
    </HeaderContainer>
  );
};
