import React from "react";

import { PageContainer } from "./style";
import { Footer, Header } from "..";
import { SearchModal } from "../Modals";
import { useSelector } from "react-redux";
import { selectSearchModal } from "../../features/modals/modalsSlice";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
      <SearchModal open={useSelector(selectSearchModal)} />
    </>
  );
};

export default GlobalLayout;
