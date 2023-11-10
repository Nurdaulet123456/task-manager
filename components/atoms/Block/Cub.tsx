import styled from "@emotion/styled";
import { ReactNode, FC } from "react";

const _Cub = styled.div`
  display: inline-block;

  background-color: rgba(255, 255, 255, 0.3);

  padding: 1rem;

  border-radius: 5px;
  cursor: pointer;

  transition: background-color 0.2s linear;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

`;

interface IProps {
  children?: ReactNode;
}

export const Cub: FC<IProps> = ({ children }) => {
  return <_Cub>{children}</_Cub>;
};
