import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

const _Text = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 2.4rem;
`;

interface IProps {
  children?: ReactNode;
}

export const Text: FC<IProps> = ({ children }) => {
  return <_Text>{children}</_Text>;
};
