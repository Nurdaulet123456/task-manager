import styled from "@emotion/styled";
import { FC } from "react";

interface IInput {
  search?: boolean;

  weight?: number;
}

export const _Input = styled.input<Partial<IInput>>`
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 5px;

  color: #fff;
  font-size: 1.8rem;

  font-weight: ${(props) => props.weight};

  padding: 1.2rem;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.search &&
    `
        background: rgba(255, 255, 255, 0.3) url(/icons/icons8-search.svg) center right 10px no-repeat;
        padding-right: 4.2rem;
  `}
`;

interface IProps {
  search?: boolean;

  text?: string;
  setText?: any;

  weight?: number;

  width?: number;

  onKeyPress?: any
}

export const Input: FC<IProps> = ({ search, text, setText, width, weight, onKeyPress }) => {
  return (
    <>
      <_Input
        search={search}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: `${width}ch` }}
        weight={weight}
        onKeyPress={onKeyPress}
      />
    </>
  );
};
