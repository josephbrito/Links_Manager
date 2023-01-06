import styled from "styled-components";

export const Container = styled.div`
  height: 25%;
  width: 200px;
  background: #555;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
  transition: 0.1s ease-in;
  position: relative;
  &:hover {
    transform: scale(1.06);
  }
`;

export const Title = styled.h1`
  letter-spacing: 1px;
  text-align: center;
`;
export const Link = styled.a`
  font-size: 1.2rem;
  color: dodgerblue;
`;

export const Delete = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: #ff5555;
  height: 20px;
  width: 20px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Edit = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #fcba03;
  height: 20px;
  width: 20px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
