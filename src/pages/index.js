// Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Define Page Component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>Welcome to my Gatsby Site!</h1>
      <p>I'm making this by following Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  );
};
// Export Component
export default IndexPage;
