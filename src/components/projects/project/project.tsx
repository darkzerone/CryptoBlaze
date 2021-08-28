import React, { ReactElement } from "react";
import classes from "./project.module.scss";
import { ProjectSmall } from "../project-page";
import { Link } from "react-router-dom";
export const Project = (project: ProjectSmall): ReactElement => {


    return (
        <>
            {project.imageLeft ?
                <>
                    <div className={`${classes.project_card} ${classes.project_mobile} d-flex justify-content-around row`}>
                        <div className={`${classes.project_image} col-12`} ><img className={`${classes.project_image}`} src={`${project.image.url}`} alt={`${project.image.alt}`} /></div>
                        <div className={`${classes.project_card} col-12 flex-column`} >
                            <div className={`${classes.project_title}`}> <p>{project.project.cardTitle} </p> </div>
                            <div className={`${classes.project_name}`}> {project.project.name} </div>
                            <div className={`${classes.project_description}`}><p>{project.project.description}</p></div>
                            {project.project.link && (
                                <div className={'mt-4 mt-md-3'}>
                                    <Link to={project.project.link}>
                                        <button className={`${classes.project_button}`}>Bekijk de case</button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={`${classes.project_card} ${classes.project_desktop} d-flex justify-content-around row`}>
                        <div className={`${classes.project_image} col-md-6 pr-4`} ><img className={`${classes.project_image}`} src={`${project.image.url}`} alt={`${project.image.alt}`} /></div>
                        <div className={`${classes.project_card} col-md-6 pl-4 flex-column`} >
                            <div className={`${classes.project_title}`}> <p>{project.project.cardTitle} </p> </div>
                            <div className={`${classes.project_name} ${project.first && classes.lg}`}> {project.project.name} </div>
                            <div className={`${classes.project_description}`}><p>{project.project.description}</p></div>
                            {project.project.link && (
                                <div className={'mt-4 mt-md-3'}>
                                    <Link to={project.project.link}>
                                        <button className={`${classes.project_button}`}>Bekijk de case</button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </>
                :
                <>
                    <div className={`${classes.project_card} ${classes.project_mobile} d-flex justify-content-around row`}>
                        <div className={`${classes.project_image} col-12`} ><img className={`${classes.project_image}`} src={`${project.image.url}`} alt={`${project.image.alt}`} /></div>
                        <div className={`${classes.project_card} col-12 flex-column`} >
                            <div className={`${classes.project_title}`}> <p>{project.project.cardTitle} </p> </div>
                            <div className={`${classes.project_name} ${project.first && classes.lg}`}> {project.project.name} </div>
                            <div className={`${classes.project_description}`}><p>{project.project.description}</p></div>
                            {project.project.link && (
                                <div className={'mt-4 mt-md-3'}>
                                    <Link to={project.project.link}>
                                        <button className={`${classes.project_button}`}>Bekijk de case</button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>


                    <div className={`${classes.project_card} ${classes.project_desktop} d-flex justify-content-around row`}>
                        <div className={`${classes.project_card} col-md-6 pr-4 flex-column`} >
                            <div className={`${classes.project_title}`}> <p>{project.project.cardTitle} </p> </div>
                            <div className={`${classes.project_name} ${project.first && classes.lg}`}> {project.project.name} </div>
                            <div className={`${classes.project_description}`}><p>{project.project.description}</p></div>
                            {project.project.link && (
                                <div className={'mt-4 mt-md-3'}>
                                    <Link to={project.project.link}>
                                        <button className={`${classes.project_button}`}>Bekijk de case</button>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className={`${classes.project_image} col-md-6 pl-4`} ><img className={`${classes.project_image}`} src={`${project.image.url}`} alt={`${project.image.alt}`} /></div>
                    </div>
                </>
            }
        </>
    );
}

if (process.env.NODE_ENV !== "production") Project.displayName = "Project";