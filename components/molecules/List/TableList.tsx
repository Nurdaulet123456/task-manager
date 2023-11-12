import { useState, useEffect } from "react";
import { Flex } from "@/components/atoms/FlexBox/Flex";
import {
  AddGrayIcons,
  DotsGrayIcons,
  PenIcons,
} from "@/components/atoms/Icons";
import { TSpan } from "@/components/atoms/Text/TSpan";
import { _TextArea } from "@/components/atoms/Inputs/TextArea";
import { useAutoSizeHeight } from "@/hooks/useAutoSize";
import { ColorMark } from "@/components/atoms/Block/ColorMark";
import { useComponentVisible } from "@/hooks/useComponentVisible";
import { TableData } from "@/components/data/data";
import { handlerClick } from "@/utils/utils";

const TableList = () => {
  const [title, setTitle] = useState<string>("Senior");

  const [visibleItems, setVisibleItems] = useState<{ [key: number]: boolean }>(
    {}
  );

  useEffect(() => {
    const initialVisibility: { [key: number]: boolean } = {};
    TableData.forEach((item) => {
      initialVisibility[item.id] = false;
    });
    setVisibleItems(initialVisibility);
  }, []);

  const textAreaRef = useAutoSizeHeight(title);

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
              onKeyPress={(e) => handlerClick(e, setIsComponentVisible)}
              readOnly={!isComponentVisible ? true : false}
            />
            <DotsGrayIcons />
          </Flex>
        </div>
        <ul className="list__info">
          {TableData.map((item) => (
            <li
              key={item.id}
              onMouseEnter={() => {
                setVisibleItems((prevVisibility) => ({
                  ...prevVisibility,
                  [item.id]: true,
                }));
              }}
              onMouseLeave={() => {
                setVisibleItems((prevVisibility) => ({
                  ...prevVisibility,
                  [item.id]: false,
                }));
              }}
            >
              <div className="list__text">
                <div className="list__mark">
                  <ColorMark color={item.color} />
                </div>
                {item.title}

                <span
                  className="list__pen"
                  style={{ display: visibleItems[item?.id] ? "flex" : "none" }}
                >
                  <PenIcons />
                </span>
              </div>
            </li>
          ))}
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
