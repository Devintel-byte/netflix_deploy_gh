import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 950px;
  padding-top: 0.85rem;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;

  @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 400px;
  width: 100%;
  border: 0;
  padding: 10px;
  align-item: center;
  margin-bottom: 5px;
  margin-left: 75px;
  margin-right: 45px;
  height: 30px;
  border-sizing: border-box;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  padding: 0 32px;
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
        width: 16px;
    }
  }
`;

export const Text = styled.p`
  font-size: 18px;
  color: white;
  text-align: center;
  padding-bottom: 1px;
  
  @media (max-width: 600px) {
      font-size: 16px;
      line-height: 22px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;