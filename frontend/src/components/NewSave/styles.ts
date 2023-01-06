import styled from "styled-components";

export const Container = styled.form`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const Input = styled.input`
  height: 30px;
  width: 25%;
  border: 1px solid #000;
  outline: none;
  padding: 10px;
`;

export const Button = styled.button`
  width: 25%;
  border: 1px solid #000;
  background: aliceblue;
  padding: 10px;
  cursor: pointer;
  letter-spacing: 2px;
`;
