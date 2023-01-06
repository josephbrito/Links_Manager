import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const OpenModal = styled.button`
  height: 50px;
  width: 50px;
  cursor: pointer;
  background: #f5f5f5;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  margin: 10px;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  letter-spacing: 3px;
`;
