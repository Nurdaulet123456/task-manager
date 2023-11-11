import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

interface ITSpan {
  color?: string;
  size?: number;
  weight?: number;
}

const _TSpan = styled.span<ITSpan>`
  font-size: ${(props) => props.size}rem;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;

interface IProps extends ITSpan {
  children?: ReactNode;

  click?: boolean;
  onClick?: any;
}

export const TSpan: FC<IProps> = ({
  children,
  color,
  size,
  weight,
  click,
  onClick,
}) => {
  return (
    <_TSpan
      color={color}
      size={size}
      weight={weight}
      className="tspan"
      style={{ display: !click ? "none" : "block" }}
      onClick={onClick}
    >
      {children}
    </_TSpan>
  );
};
