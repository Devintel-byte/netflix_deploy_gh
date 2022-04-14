import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 110px 45px;

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) { 
    padding: 95px 0;
    width: 100%;
    max-width: 950px;
    position: relative;
    margin: 0 auto;
    z-index: 1;
  }
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

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
    font-size: 1.75rem;
    line-height: 1.1;
    text-align: center;
    margin-top: -65px;
    
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