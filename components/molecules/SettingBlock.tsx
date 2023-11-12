import { useEffect, useState, KeyboardEvent } from "react";
import { Cub } from "../atoms/Block/Cub";
import { Between } from "../atoms/Border/Between";
import { Flex } from "../atoms/FlexBox/Flex";
import {
  ArrowDown,
  BoardSettingIcons,
  DotsIcons,
  FilterIcons,
  StarIcons,
} from "../atoms/Icons";
import { Text } from "../atoms/Text/Text";
import { Input } from "../atoms/Inputs/Inputs";
import { useAutoSizeWidth } from "@/hooks/useAutoSize";
import { useComponentVisible } from "@/hooks/useComponentVisible";
import { handlerClick } from "@/utils/utils";

const SettingBlock = () => {
  const [title, setTitle] = useState<string>("Frontend developer");
  const [width, setWidth] = useState(0);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  useAutoSizeWidth(title, setWidth);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="setting">
            <div ref={ref}>
              <Flex gap={1}>
                {!isComponentVisible && (
                  <Cub
                    click={isComponentVisible}
                    onClick={() => setIsComponentVisible(true)}
                  >
                    <Text>{title}</Text>
                  </Cub>
                )}

                {isComponentVisible && (
                  <Input
                    text={title}
                    setText={setTitle}
                    width={width}
                    weight={700}
                    onKeyPress={(e: KeyboardEvent<HTMLInputElement>) =>
                      handlerClick(e, setIsComponentVisible)
                    }
                  />
                )}

                <Cub>
                  <StarIcons />
                </Cub>

                <Cub>
                  <Flex gap={1} alignItems="center">
                    <BoardSettingIcons />
                    <ArrowDown />
                  </Flex>
                </Cub>
              </Flex>
            </div>

            <Flex gap={1} border>
              <Cub>
                <FilterIcons />
              </Cub>

              <Between />

              <Flex alignItems="center" gap={1}>
                <img className="img" src="/admin.png" alt="" />
                <img className="img active" src="/admin.png" alt="" />
                <div className="order">+1</div>
              </Flex>
              <Between />

              <Cub>
                <DotsIcons />
              </Cub>
            </Flex>
          </div>
        </div>
      </section>
    </>
  );
};

export default SettingBlock;
