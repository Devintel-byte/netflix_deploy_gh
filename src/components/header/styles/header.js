import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : 
  '../images/misc/home-bg-img.jpg')}) top left / cover no-repeat;
  border-bottom: 8px solid #222;

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 490px;
    border-bottom: 8px solid #222;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 35px;
  height: 50px;
  padding: 15px 0 40px 0;
  justify-content: space-between;
  align-items: center;

  a {
      display: flex;
  }

  @media (max-width: 1000px) {
      margin: 0 30px;
  }

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
    margin: 0 5%;
}
`;

export const Logo = styled.img`
  height: 60px;
  width: 160px;
  margin-right: 40px;
  margin-top: 5px;
 
  @media (min-width: 1449px) {
      height: 45px;
      width: 167px;
  }

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
    height: 42px;
    width: 50%;
    margin-left: -15px;
}
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 80px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 14px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
      background-color: #f40612;
  }

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
    font-size: 1rem;
    margin-top: 0.32rem;
    padding: 0.28rem 0.9rem;
}


}
`;