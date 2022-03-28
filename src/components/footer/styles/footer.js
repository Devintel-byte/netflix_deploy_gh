import styled from 'styled-components/macro';

//Container, Row, Column, Title, Text, Break

export const Container = styled.div`
  display: flex;
  padding: 70px 45px;
  margin: 0 auto;
  max-width: 1000px;
  flex-direction: column;

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
  grid-gap: 12px;

  @media (max-width: 1000px) {
    grid-template-column: repeat(auto-fill, minimax(150px, 1fr));
  }
`;

export const Link = styled.a`
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  color: #757575
`;

export const Title = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
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