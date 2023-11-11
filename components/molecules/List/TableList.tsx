import { useRef, useState, KeyboardEvent } from "react";
import { Flex } from "@/components/atoms/FlexBox/Flex";
import { AddGrayIcons, DotsGrayIcons } from "@/components/atoms/Icons";
import { TSpan } from "@/components/atoms/Text/TSpan";
import { _TextArea } from "@/components/atoms/Inputs/TextArea";
import { useAutoSizeHeight } from "@/hooks/useAutoSize";

const TableList = () => {
  const [title, setTitle] = useState<string>(
    "Senior Developerasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdaasdasdasdasasdasds"
  );
  const [display, setDisplay] = useState<boolean>(true);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutoSizeHeight(textAreaRef.current, title);

  const handlerClick = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      setDisplay(true);
    }
  };

  return (
    <>
      <div className="list__block">
        <div className="list__header">
          <Flex justifyContent="space-between" alignItems="flex-start">
            <_TextArea
              weight={700}
              value={title}
              onClick={() => setDisplay(false)}
              onChange={(e) => setTitle(e.target.value)}
              rows={1}
              ref={textAreaRef}
              style={{ display: !display ? "block" : "false" }}
              onKeyPress={handlerClick}
              readOnly={display ? true : false}
            />
            <DotsGrayIcons />
          </Flex>
        </div>

        <ul className="list__info">
          <li>
            <div className="list__text">Nginx</div>
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
