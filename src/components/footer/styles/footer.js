import styled from 'styled-components/macro';

//Container, Row, Column, Title, Text, Break

export const Container = styled.div`
  display: flex;
  padding: 45px 8px 2px 50px;
  margin: 0 10em;
  max-width: 1000px;
  flex-direction: column;
  bottom: 0;

  @media (max-width: 1000px) {
      padding: 70px 30px;
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
  font-size: 12px;
  text-decoration: none;
  color: #757575
`;

export const Title = styled.p`
  font-size: 15px;
  margin-bottom: 35px;
  color: #757575;
`;

export const Text = styled.h2`
  font-size: 13px;
  margin-bottom: 40px;
  color: #757575;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;