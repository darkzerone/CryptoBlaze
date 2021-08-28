import React, { ReactElement, useState } from "react";
import classes from "./contact-page.module.scss";
export const ContactPage = (): ReactElement => {

    return (
        <div className={`${classes.contact_wrapper} justify-content-center`}>
            <div className={`${classes.contact_body} row container p-0`}>
                <div className={`${classes.contact_text_body} col-md-8 col-sm-12`}>
                    <img className={`${classes.contact_logo}`} src={`${process.env.PUBLIC_URL}/assets/tk.jfif`} alt="lorum" />
                    <div className={`${classes.contact_text_wrapper}`}>
                        <p className={`${classes.contact_title}`}>Lorum ispumusus</p>
                        <p className={`${classes.contact_title_large}`}>Ipsum lore?</p>
                        <p className={`${classes.contact_description}`}>
                            Lorum Ipsum, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>                
                    </div>
                </div>
                <div className={`${classes.contact_scene} justify-content-center col-md-4 col-sm-12 container row`}>
                </div>
            </div>
        </div>

    );
}

if (process.env.NODE_ENV !== "production") ContactPage.displayName = "ContactPage";