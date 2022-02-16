import styled from "styled-components";

const Button = styled.button`
  box-sizing: border-box;
  color: white;
  font-size: 30px;
  font-weigth: bold;
  height: 50px;
  width: 200px;
`;

export const PrimaryButton = Button.extend`
  background-color: #4682b4;
`;

export const SecondaryButton = Button.extend`
  background-color: #C0625E;
`;