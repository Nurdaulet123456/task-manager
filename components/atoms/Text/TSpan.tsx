import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

interface ITSpan {
  color?: string;
  size?: number;
  weight?: number;
}

const _TSpan = styled.div<ITSpan>`
  font-size: ${(props) => props.size}rem;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;

interface IProps extends ITSpan {
  children?: ReactNode;
}

export const TSpan: FC<IProps> = ({ children, color, size, weight }) => {
  return (
    <_TSpan color={color} size={size} weight={weight} className="tspan">
      {children}
    </_TSpan>
  );
};
