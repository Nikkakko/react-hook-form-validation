import styled from 'styled-components';
import FormComponent from './components/FormComponent';
import TextComponent from './components/TextComponent';

const App = () => {
  return (
    <AppWrapper>
      <TextComponent
        headTitles='Learn to code by watching others'
        subTitles='See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. '
      />
      <FormComponent />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 88px 24px 68px 24px;
  gap: 64px;

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-around;
    margin: 121px 165px;

    gap: 45px;
  }
`;

export default App;
