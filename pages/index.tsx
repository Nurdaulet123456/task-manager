import List from "@/components/organisms/List";
import Setting from "@/components/organisms/Setting";
import MainLayouts from "@/layouts/MainLayouts";

const MainPage = () => {
  return (
    <>
      <MainLayouts title="Trello">
        <Setting />

        <hr />

        <List />
      </MainLayouts>
    </>
  );
}

export default MainPage;
