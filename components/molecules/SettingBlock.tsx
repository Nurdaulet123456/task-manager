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

const SettingBlock = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="setting">
            <Flex gap={1}>
              <Cub>
                <Text>Frontend developer</Text>
              </Cub>

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
