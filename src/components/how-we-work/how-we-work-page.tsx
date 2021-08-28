import React, { ReactElement } from "react";
import classes from "./how-we-work-page.module.scss";
export const HowWeWorkPage = (): ReactElement => {


    return (
        <div data-aos="fade-up" className={`${classes.how_we_work_wrapper}`}>
            <div className="container">
                <div className={`${classes.how_we_work_content_wrapper} row`}>
                    <div className={`${classes.how_we_work_text_wrapper} col-12 col-md-6`} >
                        <div className={`${classes.how_we_work_image_wrapper} ${classes.how_we_work_mobile}`} ><img className={`${classes.how_we_work_image}`} src={`${process.env.PUBLIC_URL}/assets/tk.jfif`} alt={'lorum'} /></div>
                        <div className={`${classes.how_we_work_title}`}> <p>Lorum ipsum</p></div>
                        <div > <p className={`${classes.how_we_work_title_large}`}>Lorum ipsum..</p> </div>
                        <div className={`${classes.how_we_work_icon_wrapper} ${classes.how_we_work_desktop} d-flex col-md-12 justify-content-between row mt-3w`}>
                            <div className={`${classes.how_we_work_icon_column} column`}>
                                <div><img className={`${classes.how_we_work_icon}`} src={`${process.env.PUBLIC_URL}/assets/full-service-image.png`} alt={'full service'} /></div>
                                <div className={`${classes.how_we_work_icon_title}`}>Lorum Ipsum</div>
                                <div>Lorum Ipsum, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </div>
                            </div>
                            <div className={`${classes.how_we_work_icon_column} column`}>
                                <div><img className={`${classes.how_we_work_icon}`} src={`${process.env.PUBLIC_URL}/assets/fresh-image.png`} alt={'wind'} /></div>
                                <div className={`${classes.how_we_work_icon_title}`}>Lorum Ipsum</div>
                                <div>Lorum Ipsum, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </div>
                            </div>
                            <div className={`${classes.how_we_work_icon_column} column`}>
                                <div><img className={`${classes.how_we_work_icon}`} src={`${process.env.PUBLIC_URL}/assets/flexible-image.png`} alt={'flexed box'} /></div>
                                <div className={`${classes.how_we_work_icon_title}`}>Lorum Ipsum</div>
                                <div>Lorum Ipsum, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${classes.how_we_work_mobile} d-flex col-md-12`}>
                        <div className={`${classes.how_we_work_icon_column} column`}>
                            <div><img className={`${classes.how_we_work_icon}`} src={`${process.env.PUBLIC_URL}/assets/full-service-image.png`} alt={'full service'} /></div>
                            <div className={`${classes.how_we_work_icon_title}`}>Lorum Ipsum</div>
                            <div><p className={`${classes.how_we_work_icon_description}`}>Lorum Ipsum, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p></div>
                        </div>
                        <div className={`${classes.how_we_work_icon_column} column`}>
                            <div><img className={`${classes.how_we_work_icon}`} src={`${process.env.PUBLIC_URL}/assets/fresh-image.png`} alt={'wind'} /></div>
                            <div className={`${classes.how_we_work_icon_title}`}>Lorum Ipsum</div>
                            <div><p className={`${classes.how_we_work_icon_description}`}>Lorum Ipsum, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p></div>
                        </div>
                        <div className={`${classes.how_we_work_icon_column} column`}>
                            <div><img className={`${classes.how_we_work_icon}`} src={`${process.env.PUBLIC_URL}/assets/flexible-image.png`} alt={'flexed box'} /></div>
                            <div className={`${classes.how_we_work_icon_title}`}>Lorum Ispum</div>
                            <div><p className={`${classes.how_we_work_icon_description}`}>Lorum Ipsum, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum .</p></div>
                        </div>
                    </div>

                    <div className={`${classes.how_we_work_image_wrapper} ${classes.how_we_work_desktop} col-md-6 `} ><img className={`${classes.how_we_work_image}`} src={`${process.env.PUBLIC_URL}/assets/tk.jfif`} alt={'lorum'} /></div>
                </div>
            </div>
        </div>
    );
}

if (process.env.NODE_ENV !== "production") HowWeWorkPage.displayName = "HowWeWorkPage";