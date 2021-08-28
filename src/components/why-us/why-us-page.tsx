import React, { ReactElement } from "react";
import classes from "./why-us-page.module.scss";
export const WhyUsPage = (): ReactElement => {


    return (
        <div data-aos="fade-up" className={`${classes.why_us_wrapper}`}>
            <div className="container">
                <div className={`${classes.why_us_content_wrapper} row`}>
                    <div className={`${classes.why_us_text_wrapper} col-12 col-md-6`} >
                        <div className={`${classes.why_us_image_wrapper} ${classes.why_us_mobile} mb-3`} ><img className={`${classes.why_us_image}`} src={`${process.env.PUBLIC_URL}/assets/nft_pc.png`} alt={'lorum'} /></div>
                        <div > <p className={`${classes.why_us_title_large} pb-3`}>Why CryptoPlaze?</p> </div>
                        <div className={`${classes.why_us_icon_wrapper} ${classes.why_us_desktop} d-flex col-md-12 justify-content-between row mt-3w`}>
                            <div className={`${classes.why_us_icon_column} column`}>
                                <div className={`${classes.why_us_icon} pl-2`}><i className="fas fa-lock"></i></div>
                                <div className={`${classes.why_us_icon_title}`}>Safety</div>
                                <div>The safety of your NFTs and crypto is our number one priority!</div>
                            </div>
                            <div className={`${classes.why_us_icon_column} column`}>
                                <div className={`${classes.why_us_icon} pl-2`}><i className="fas fa-draw-polygon"></i></div>
                                <div className={`${classes.why_us_icon_title}`}>Flexibility</div>
                                <div>With CyrptoPlaze we like to stay flexible, use any of our supported coins to trade for NFTs!</div>
                            </div>
                            <div className={`${classes.why_us_icon_column} column`}>
                                <div className={`${classes.why_us_icon} pl-2`}><i className="fas fa-hand-sparkles"></i></div>
                                <div className={`${classes.why_us_icon_title}`}>Easy to use</div>
                                <div>With just a few clicks put your NFT up for auction or for sale on the marketplace!</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${classes.why_us_mobile} d-flex col-md-12`}>
                        <div className={`${classes.why_us_icon_column} column`}>
                            <div className={`${classes.why_us_icon} pl-2`}><i className="fas fa-lock"></i></div>
                            <div className={`${classes.why_us_icon_title}`}>Safety</div>
                            <div><p className={`${classes.why_us_icon_description}`}>The safety of your NFTs and crypto is our number one priority!</p></div>
                        </div>
                        <div className={`${classes.why_us_icon_column} column`}>
                            <div className={`${classes.why_us_icon} pl-2`}><i className="fas fa-draw-polygon"></i></div>
                            <div className={`${classes.why_us_icon_title}`}>Flexibility</div>
                            <div><p className={`${classes.why_us_icon_description}`}>With CyrptoPlaze we like to stay flexible, use any of our supported coins to trade for NFTs!</p></div>
                        </div>
                        <div className={`${classes.why_us_icon_column} column`}>
                            <div className={`${classes.why_us_icon} pl-2`}><i className="fas fa-hand-sparkles"></i></div>
                            <div className={`${classes.why_us_icon_title}`}>Easy to use</div>
                            <div><p className={`${classes.why_us_icon_description}`}>With just a few clicks put your NFT up for auction or for sale on the marketplace!</p></div>
                        </div>
                    </div>

                    <div className={`${classes.why_us_image_wrapper} ${classes.why_us_desktop} col-md-6 `} ><img className={`${classes.why_us_image}`} src={`${process.env.PUBLIC_URL}/assets/nft_pc.png`} alt={'lorum'} /></div>
                </div>
            </div>
        </div>
    );
}

if (process.env.NODE_ENV !== "production") WhyUsPage.displayName = "WhyUsPage";