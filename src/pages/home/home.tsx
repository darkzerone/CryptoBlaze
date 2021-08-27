import React from "react";
import { IntroPage } from "../../components/intro-page/intro-page";
import { ContactPage } from "../../components/contact/contact-page";
import { PortfolioQuotes } from "../../components/portfolio-quotes/portfolio-quotes";
import { DisruptPage } from "../../components/disrupt/disrupt-page";
import { ProjectPage } from "../../components/projects/project-page";
import { HowWeWorkPage } from "../../components/how-we-work/how-we-work-page";

export const Home = () => {
  
  return (
    <>
      <IntroPage/>
      <PortfolioQuotes />
      <HowWeWorkPage />
      <ProjectPage />
      <DisruptPage />
      <ContactPage />
    </>
  );
}

if (process.env.NODE_ENV !== "production") Home.displayName = "Home";