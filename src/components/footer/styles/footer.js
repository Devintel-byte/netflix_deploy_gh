import styled from 'styled-components/macro';

//Container, Row, Column, Title, Text, Break

export const Container = styled.div`
  display: flex;
  padding: 45px 8px 2px 50px;
  margin: 0 10em;
  flex-direction: column;
  bottom: 0;

  @media (max-width: 1000px) {
      padding: 70px 30px;
  }

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 300px) and (max-width: 349px) { 
    border-bottom: none;
    margin: 0 auto;
    padding: 35px 25px 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 0.2px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  margin-bottom: 16px;
  text-align: center;
  font-size: 13px;
  text-decoration: none;
  color: #757575;

`;

export const Title = styled.p`
  font-size: 15px;
  margin-bottom: 35px;
  color: #757575;
  font-weight: 800;

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 300px) and (max-width: 349px) {
    text-align: center;
  }
`;

export const Text = styled.h2`
  font-size: 13px;
  margin-bottom: 40px;
  color: #757575;

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 300px) and (max-width: 349px) {
    text-align: center;
  }

`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;