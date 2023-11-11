import styled from "@emotion/styled";
import { FC } from "react";

interface IInput {

  weight?: number;
}

export const _TextArea = styled.textarea<Partial<IInput>>`
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 5px;

  resize: none;

  color: #000;
  font-size: 1.7rem;

  font-weight: ${(props) => props.weight};

  padding: 1rem;

  min-height: 20px;
  overflow: hidden;
  overflow-wrap: break-word;

  &:focus {
    outline: none;
  }

  &:read-only {
    cursor: pointer;
  }
`;

interface IProps  {
  text?: string;
  setText?: any;

  weight?: number;

  onKeyPress?: any;

}

export const TextArea: FC<IProps> = ({
  text,
  setText,
  weight,
  onKeyPress,
}) => {
  return (
    <>
      <_TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        weight={weight}
        onKeyPress={onKeyPress}
        rows={1}
      />
    </>
  );
};
