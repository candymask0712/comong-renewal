import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0px;
  font-family: roboto;
  background-color: blue;
`;

export const Footer = () => {
  return <FooterContainer>푸터입니다.</FooterContainer>;
};
