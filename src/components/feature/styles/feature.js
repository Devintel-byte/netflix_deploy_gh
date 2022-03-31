import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 110px 45px;
`;

export const Frame = styled.div`
  margin-bottom: -24px;
`;

export const Title = styled.h1`
  max-width: 640px;
  color: white;
  font-size: 48px;
  font-weight: 600;
  margin: auto;

  @media (max-width: 600px) {
      font-size: 35px;
  }
`;


export const SubTitle = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;