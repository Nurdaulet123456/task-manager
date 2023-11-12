import { useRef, useState, KeyboardEvent } from "react";
import { Flex } from "@/components/atoms/FlexBox/Flex";
import { AddGrayIcons, DotsGrayIcons } from "@/components/atoms/Icons";
import { TSpan } from "@/components/atoms/Text/TSpan";
import { _TextArea } from "@/components/atoms/Inputs/TextArea";
import { useAutoSizeHeight } from "@/hooks/useAutoSize";
import { ColorMark } from "@/components/atoms/Block/ColorMark";
import { useComponentVisible } from "@/hooks/useComponentVisible";

const TableList = () => {
  const [title, setTitle] = useState<string>("Senior");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutoSizeHeight(textAreaRef.current, title);

  const handlerClick = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      setIsComponentVisible(false);
    }
  };

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <>
      <div className="list__block" ref={ref}>
        <div className="list__header">
          <Flex justifyContent="space-between" alignItems="flex-start">
            <_TextArea
              weight={700}
              value={title}
              onClick={() => setIsComponentVisible(true)}
              onChange={(e) => setTitle(e.target.value)}
              rows={1}
              ref={textAreaRef}
              style={{ display: isComponentVisible ? "block" : "false" }}
              onKeyPress={handlerClick}
              readOnly={!isComponentVisible ? true : false}
            />
            <DotsGrayIcons />
          </Flex>
        </div>

        <ul className="list__info">
          <li>
            <div className="list__text">
              <ColorMark color="red" />
              Nginx
            </div>
          </li>

          <li>
            <div className="list__text">CI/CD</div>
          </li>

          <li>
            <div className="list__text">Jest, e2e</div>
          </li>

          <li>
            <div className="list__text">
              ИншаАллаһ бәріне де жетемі, өйткені менің қолымнан келеді бәрі тек
              берілмеу керек бұйырса
            </div>
          </li>
        </ul>

        <div className="list__footer">
          <Flex alignItems="center" gap={1}>
            <AddGrayIcons />
            <TSpan color="#000" size={1.7} weight={700} click>
              Add a card
            </TSpan>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default TableList;
