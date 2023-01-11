import styled from 'styled-components';

type textProps = {
  headTitles: string;
  subTitles: string;
};

const TextComponent = ({ headTitles, subTitles }: textProps) => {
  return (
    <Container>
      <Title>{headTitles}</Title>
      <SubTitle>{subTitles}</SubTitle>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  gap: 16px;

  @media (min-width: 1440px) {
    width: 550px;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  /* or 129% */

  text-align: center;
  letter-spacing: -0.291667px;

  color: #ffffff;

  @media (min-width: 1440px) {
    font-size: 50px;
    line-height: 55px;
    text-align: start;
  }
`;
const SubTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  text-align: center;

  color: #ffffff;

  @media (min-width: 1440px) {
    text-align: start;
  }
`;

export default TextComponent;
