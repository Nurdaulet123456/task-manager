import Header from "@/components/organisms/Header";
import { ILayout } from "@/utils/utils";
import Head from "next/head";

const MainLayouts = ({ title, children }: ILayout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      <div className="page">{children}</div>
    </>
  );
};

export default MainLayouts;
