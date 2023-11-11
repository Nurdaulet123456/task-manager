import { Flex } from "@/components/atoms/FlexBox/Flex";
import { AddGrayIcons, DotsGrayIcons } from "@/components/atoms/Icons";
import { TSpan } from "@/components/atoms/Text/TSpan";

const TableList = () => {
  return (
    <>
      <div className="list__block">
        <div className="list__header">
          <Flex justifyContent="space-between" alignItems="center">
            <TSpan size={1.7} weight={700} color="#000">
              Senior Developer
            </TSpan>
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
            <TSpan color="#000" size={1.7} weight={700}>Add a card</TSpan>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default TableList;
