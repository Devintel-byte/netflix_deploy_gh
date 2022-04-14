import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;

`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 720px;
  margin: auto;

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
    padding: 2px 0;
    margin-bottom: 35px;
    text-align: center;
    padding-top: 50px;
    position: relative;
  }
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 8px;
  max-width: 820px;

  &: first-of-type {
      margin-top: 1.5rem;
  }

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
    padding-top: 8px;
    margin: 0 auto;
    margin-bottom: 1px;
    font-weight: 400;
    position: relative;
    width: 100%;
    border: 0
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

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
    font-size: 16px;
}
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

    @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
      font-size: 1.125rem;
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

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
    font-size: 1.625rem;
    margin: 0 0 0.4em;
    line-height: 1.1;
    margin-bottom: 0.2rem;
    padding-left: 5%;
    padding-right: 5%;
}
`;
