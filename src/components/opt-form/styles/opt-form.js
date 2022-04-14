import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
  }

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
      flex-direction: column;
      align-items: center;
      padding: 0 5%;
  }
`;

export const Input = styled.input`
  max-width: 380px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 35px;
  outline: none;
  border-sizing: border-box;

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
    height: 30px;
    margin-top: 5px;
    padding: 10px 5px 10px 5px;
    width: 100%;
    box-shadow: none;
}
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  height: 55px;
  background: #e50914;
  color: white;
  padding: 0 38px;
  font-size: 24px;
  border: 0;
  cursor: pointer;

  &:hover {
      background: #f40612;
  }

  @media (max-width: 1000px) {
      height: 50px;
      font-size: 16px;
      margin-top: 20px;
      font-weight: bold;
  }

  img {
      margin-left: 10px;
      filter: brightness(0) invert(1);
      width: 18px;

    @media (max-width: 1000px) {
        width: 12px;
    }
  }

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) { 
    font-size: 16px;
    min-height: 40px;
    vertical-align: middle;
    cursor: pointer;
    font-weight: 400;
    letter-spacing: .1px;
    align-items: center;
    margin: 1em auto;
    padding: 0 1em;
    line-height: initial;
    width: auto;
    user-select: none;
    border-radius: 2px;
    border: 0;
    border-sizing: border-box;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  color: white;
  text-align: center;
  
  
  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
    padding: 0 2%;
    max-width: 450px;
    margin: 0 auto;
    font-weight: 400;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;