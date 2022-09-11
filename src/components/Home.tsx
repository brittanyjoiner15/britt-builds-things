import {
  EuiButton,
  EuiEmptyPrompt,
  EuiHeaderLink,
  EuiImage,
  EuiLink,
  EuiPage,
  EuiPageTemplate,
  EuiSpacer,
  EuiTitle,
} from "@elastic/eui";
import React from "react";

const newsletterCTA = (
  <EuiButton iconType="email" fill>
    Get updates about what I build
  </EuiButton>
);

const rightSideItems = [
  <EuiHeaderLink>For Founders and Brands</EuiHeaderLink>,
  <EuiHeaderLink>For Builders</EuiHeaderLink>,
  <EuiHeaderLink>My Projects</EuiHeaderLink>,
  <EuiHeaderLink>About Britt</EuiHeaderLink>,
  newsletterCTA,
];

export default function Home() {
  return (
    <EuiPageTemplate>
      <EuiPageTemplate.Header
        iconType="logoElastic"
        pageTitle="Britt Builds Things"
        rightSideItems={rightSideItems}
        rightSideGroupProps={{ direction: "column" }}
        responsive={false}
      />
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
