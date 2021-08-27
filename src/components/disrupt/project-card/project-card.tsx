import React, { ReactElement } from "react";
import classes from "./project-card.module.scss";
import { ProjectCardType } from "../disrupt-page";

export const ProjectCard = (project: ProjectCardType): ReactElement => {
    return (
        <div className={`${classes.project_card_wrapper} d-flex justify-content-around row`}>
            <div className={`${classes.project_card_right} ${classes.project_card_mobile} col-12`} ><img className={`${classes.project_card_image}`} src={`${project.image.url}`} alt={`${project.image.alt}`} /></div>
            <div className={`${classes.project_card_left} col-md-6 flex-column`} >
                <div className={`${classes.project_card_title}`}> <p className="m-0">{project.title} </p> </div>
                <div className={`${classes.project_card_name}`}> {project.project.name} </div>
                <div className={`${classes.project_card_property_row} row`}>
                    <img className={`${classes.project_card_time_image}`} src={`${process.env.PUBLIC_URL}/assets/tk.jfif`} alt="lorum" />
                    <div className={`${classes.project_card_time}`}><p>{project.project.duration}</p></div>
                    <img className={`${classes.project_card_skills_image}`} src={`${process.env.PUBLIC_URL}/assets/tk.jfif`} alt="lorum" />
                    <div className={`${classes.project_card_skills}`}><p>{project.project.skills}</p></div>
                </div>
                <div className={`${classes.project_card_description}`}>{project.project.description}</div>
                <div className={`${classes.project_card_quote}`}>{project.quote.quote}</div>
                <div className={`${classes.project_card_quote_owner}`}>{project.quote.owner}</div>
            </div>
            <div className={`${classes.project_card_right} ${classes.project_card_desktop} col-md-6 d-block`} ><img className={`${classes.project_card_image}`} src={`${project.image.url}`} alt={`${project.image.alt}`} /></div>
        </div>
    );
}

if (process.env.NODE_ENV !== "production") ProjectCard.displayName = "ProjectCard";