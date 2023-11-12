import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

interface IMark {
  color?: string;
}

export const _Mark = styled.div<IMark>`
  margin-bottom: 1rem;
  padding-right: 0;
  padding-left: 0;
  min-width: 40px;
  max-width: 40px;
  height: 8px;

  border-radius: 4px;

  background-color: ${(props) => props.color};
`;

interface IProps extends IMark {
  children?: ReactNode;
}

export const ColorMark: FC<IProps> = ({ children, color }) => {
  return <_Mark color={color}>{children}</_Mark>;
};
