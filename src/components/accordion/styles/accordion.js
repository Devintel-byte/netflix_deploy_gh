import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 8px;
  max-width: 670px;

  &: first-of-type {
      margin-top: 1.5rem;
  }
`;
 
export const Body = styled.div`
  max-height: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-weight: normal;
  line-height: normal;
  background: #303030;
  white-space: pre-wrap;
  user-select: none;
  font-size: 24px;
  padding: 0.8em 2.2em 0.8em 1.2em;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 24px;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

    @media (max-width: 600px) {
      font-size: 16px;
    }
`;


export const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.1;
  text-align: center;
  color: white;
  margin-top: auto;
  margin-bottom: 0.5rem;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 600px) {
      font-size: 24px;
  }
`;
