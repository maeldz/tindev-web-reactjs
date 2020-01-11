import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 20px;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 48px;
      padding: 0 20px;
      font-size: 16px;
      color: #666;

      &::placeholder {
        color: #999;
      }
    }

    button {
      margin-top: 10px;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      height: 48px;
      background: #df4723;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
