import {
  EuiEmptyPrompt,
  EuiImage,
  EuiPageTemplate,
  EuiSpacer,
} from "@elastic/eui";
import React from "react";
// import Header from "./Header";
import { newsletterCTA } from "./utils";

export default function Home() {
  return (
    <EuiPageTemplate>
      {/* <Header /> // commenting off for now til i figure out why it's not */}
      working
      <EuiPageTemplate.Section>
        <EuiImage
          size="l"
          hasShadow
          alt="Brittany standing in front of mountains"
          src="./brittanyjpg.jpg"
        />
        <EuiSpacer size="xl" />

        <EuiEmptyPrompt
          title={<h2>👋 I'm Britt, and I like to build things</h2>}
          body={
            <p>
              You've found the right place to learn more about me, the things
              I'm building, and how I can help you!
            </p>
          }
          actions={newsletterCTA}
        />
      </EuiPageTemplate.Section>
    </EuiPageTemplate>
  );
}
