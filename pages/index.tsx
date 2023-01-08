import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 105px);
  position: fixed;
  top: 65px;
  bottom: 40px;
  font-family: roboto;
  background-color: green;
`;

export default function Home() {
  return (
    <HomeContainer>
      <button
        type='button'
        onClick={() => {
          throw new Error('Sentry Frontend Error');
        }}
      >
        Throw error
      </button>
    </HomeContainer>
  );
}
