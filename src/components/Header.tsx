import { EuiHeaderLink, EuiPageTemplate } from "@elastic/eui";
import React from "react";
import { newsletterCTA } from "./utils";

const rightSideItems = [
  //   <EuiHeaderLink>For Founders and Brands</EuiHeaderLink>,
  //   <EuiHeaderLink>For Builders</EuiHeaderLink>,
  <EuiHeaderLink>Portfolio</EuiHeaderLink>, // this will go to a page that shows cards for each
  <EuiHeaderLink>TechStack</EuiHeaderLink>, // this shows all my
  <EuiHeaderLink>About Britt</EuiHeaderLink>,
  newsletterCTA,
];

export default function Header() {
  return (
    <EuiPageTemplate.Header
      iconType="logoElastic"
      pageTitle="Britt Builds Things"
      rightSideItems={rightSideItems}
      rightSideGroupProps={{ direction: "column" }}
      responsive={false}
      className={"header"}
    />
  );
}
