import React, { ReactElement, useRef } from "react";
import classes from "./disrupt-page.module.scss";
import { ProjectCard } from "./project-card/project-card";

type Quote = {
  owner: string,
  quote: string,
}

type Project = {
  name: string,
  duration: string,
  skills: string,
  description: string
}

export type Image = {
  url: string,
  alt: string,
}

export type ProjectCardType = {
  title: string,
  image: Image,
  project: Project,
  quote: Quote,
}

export const DisruptPage = (): ReactElement => {
  const parent = useRef(null);

  return (
    <div ref={parent} className={`${classes.disrupt_wrapper} d-flex align-items-center`}>
      <div className="container">
        <div className={`${classes.disrupt_body} flex-column justify-content-center row align-items-center`}>
          <div className={`${classes.opacity_gradient} d-none d-md-block`}>
      
          </div>
          <div className={`${classes.disrupt_title_body}  col-md-12 justify-content-center`}>
            <div><img
              className={`${classes.project_card_title}`}
              src={`${process.env.PUBLIC_URL}/assets/tk.jfif`}
              alt="lorum"
            /></div>
            <div>GET STARTED</div>
            <div><h1 className={`${classes.disrupt_title_large}`}>LORUM IPSUM</h1></div>
            <div className={`d-flex justify-content-center`} ><p className={`${classes.disrupt_title_description} m-0`}>Lorum Ipsum, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p></div>
          </div>
          <ProjectCard
            image={{
              url: `${process.env.PUBLIC_URL}/assets/tk.jfif`,
              alt: 'Lorum'
            }}
            project={{
              description: `Lorum Ipsum, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
              duration: `Lorum`,
              name: `LorumIpsum`,
              skills: `lore`
            }}
            quote={{
              owner: `Quote`,
              quote: `“Lorum Ipsum, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ”`
            }}
            title={'LorumIpsumus'}
            key={'LorumIpsum'}
          />
        </div>
      </div>
    </div>
  );
}

if (process.env.NODE_ENV !== "production") DisruptPage.displayName = "DisruptPage";