import React from "react";

import { PageContainer } from "./style";
import { Footer, Header } from "..";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </>
  );
};

export default GlobalLayout;
