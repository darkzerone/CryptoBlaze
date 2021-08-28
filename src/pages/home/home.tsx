import React from "react";
import { IntroPage } from "../../components/intro-page/intro-page";
import { ContactPage } from "../../components/contact/contact-page";
import { Carousel } from "../../components/carousel/carousel";
import { DisruptPage } from "../../components/disrupt/disrupt-page";
import { ProjectPage } from "../../components/projects/project-page";
import { WhyUsPage } from "../../components/why-us/why-us-page";

export const Home = () => {
  
  return (
    <>
      <IntroPage/>
      <Carousel />
      <WhyUsPage />
      <ProjectPage />
      <DisruptPage />
      <ContactPage />
    </>
  );
}

if (process.env.NODE_ENV !== "production") Home.displayName = "Home";