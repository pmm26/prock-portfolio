import styled from "styled-components";

interface ButtonType {
  black?: any;
  height?: number;
  width?: number;
}

export const Button = styled.button<ButtonType>`
  display: flex;
  width: 200px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-family: "Futura book font", sans-serif;
  font-size: 25px;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  border: none;
  margin: 10px;

  background-color: #fafdff;
  color: ${(props) => props.theme.colors.orange};

  ${({ black, theme }) =>
    black &&
    `
    background-color:  ${theme.colors.black};
    color: #fff;
  `}

  ${({ height }) => height && `
    height: ${height}px;
  `}

  ${({ width }) => width && `
    width: ${width}px;
  `}
`;

const ButtonLink = (props: {  
  href?: string;
  children?: React.ReactNode
  black?: any;
  height?: number;
  width?: number;
}) => {
  return (
    <a href={props.href}>
      <Button {...props} />
    </a>
  );
};

export default ButtonLink;
