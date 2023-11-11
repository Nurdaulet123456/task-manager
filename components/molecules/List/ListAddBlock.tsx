import { Cub } from "@/components/atoms/Block/Cub";
import { Flex } from "@/components/atoms/FlexBox/Flex";
import { AddIcons } from "@/components/atoms/Icons";
import TableList from "./TableList";

const ListAddBlock = () => {
  return (
    <>
      <Flex alignItems="flex-start" gap={2.4}>
        <Cub>
          <Flex gap={1} alignItems="center">
            <AddIcons />
            Add another list
          </Flex>
        </Cub>

        <TableList />
      </Flex>
    </>
  );
};

export default ListAddBlock;
