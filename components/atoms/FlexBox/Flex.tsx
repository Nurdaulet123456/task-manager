import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

interface IFlex {
  justifyContent?: string;
  alignItems?: string;

  gap?: number;

  border?: boolean;
}

const _Flex = styled.div<IFlex>`
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap}rem;

  position: relative;

  img {
    width: 40px;
    object-fit: contain;

    cursor: pointer;
  }

  .active {
    margin-left: -2rem;
  }
`;

interface IProps {
  children?: ReactNode;

  justifyContent?: string;
  alignItems?: string;

  gap?: number;
  border?: boolean;
}

export const Flex: FC<IProps> = ({
  children,
  gap,
  alignItems,
  justifyContent,
  border,
}) => {
  return (
    <_Flex
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      border={border}
    >
      {children}
    </_Flex>
  );
};
