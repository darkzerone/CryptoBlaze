import React, { ReactElement } from "react";
import classes from "./project-page.module.scss";
import { Image } from "../disrupt/disrupt-page";
import { Project } from "./project/project";

type SmallProject = {
    cardTitle: string,
    name: string,
    description: string,
    link?: string,
}
export type ProjectSmall = {
    first: boolean;
    image: Image,
    project: SmallProject,
    imageLeft: boolean,

}
export const ProjectPage = (): ReactElement => {

    return (
        <div className={`${classes.box_shadow}`}>
            <div className={`${classes.project_wrapper}`}>
                <div data-aos="fade-up" className={`${classes.project_first_item} ${classes.w_100} container`}>
                    <Project
                        first={true}
                        imageLeft={false}
                        image={{ alt: "", url: `` }}
                        project={{
                            cardTitle: "Lorum ipsum",
                            description: "Lorum Ipsum, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            name: "LORUM IPSUM."
                        }}
                        key={"LI"}
                    />
                </div>
                <div data-aos="fade-up" className={`${classes.w_100} container`}>
                    <Project
                        first={false}
                        imageLeft={true}
                        image={{ alt: "lorum", url: `${process.env.PUBLIC_URL}/assets/tk.jfif` }}
                        project={{
                            cardTitle: "Lorum ispum",
                            description: `Lorum Ipsum, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                            name: "LORUM IPSUM."
                        }}
                        key={"lorum"}
                    />
                </div>
                <div data-aos="fade-up" className={`${classes.w_100} container`}>
                    <Project
                        first={false}
                        imageLeft={false}
                        image={{ alt: "Adviesbox image", url: `${process.env.PUBLIC_URL}/assets/tk.jfif` }}
                        project={{
                            cardTitle: "Lorum ipsum",
                            description: `Lorum Ipsum, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                            name: "LORUM ISPUM."
                        }}
                        key={"Ipsum"}
                    />
                </div>
                <div data-aos="fade-up" className={`${classes.w_100} container`}>
                    <Project
                        first={false}
                        imageLeft={true}
                        image={{ alt: "lorum", url: `${process.env.PUBLIC_URL}/assets/tk.jfif` }}
                        project={{
                            cardTitle: "Lorum ipsum",
                            description: `Lorum Ipsum, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                            name: "LORUM IPSUM.",
                        }}
                        key={"Lorip"}
                    />
                </div>
            </div>
        </div>
    );
}

if (process.env.NODE_ENV !== "production") ProjectPage.displayName = "ProjectPage";