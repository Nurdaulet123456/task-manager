import styled from "@emotion/styled";
import { FC } from "react";

interface IInput {
  search: boolean;
}

const _Input = styled.input<Partial<IInput>>`
background-color: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 5px;

  color: #fff;
  font-size: 1.8rem;

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
}

export const Input: FC<IProps> = ({search}) => {
  return (
    <>
      <_Input search={search}/>
    </>
  );
};
