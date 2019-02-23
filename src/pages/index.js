import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Playground from "../components/Playground";
const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="FlexBox "
      keywords={[`Flex Box 101`, `niyasrahman`, `flecbox tricks`]}
    />
    <Playground />
  </Layout>
);

export default IndexPage;
