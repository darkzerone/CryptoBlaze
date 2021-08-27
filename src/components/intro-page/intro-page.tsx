import React, { ReactElement } from "react";
import classes from "./intro-page.module.scss";

export const IntroPage = (): ReactElement => {
  return (
    <div className={`${classes.intro_wrapper}`}>
      <div className={`${classes.intro_body} container`}>

        <div className={`${classes.intro_title_wrapper}`}>
          <h1 className={`${classes.intro_title}`}>CryptoPlaze</h1>
        </div>
          <p className={`${classes.intro_description}`}>
            The biggest online market for non-fungible tokens. 
          </p>
        <div className={`${classes.intro_text_wrapper}`}>
          <span className={`${classes.intro_text_title} d-block`}>
            What do we do?
            </span>
          <span className={`${classes.intro_text} d-block fw-bold`}>
            We will make sure that your selling / buying process goes as smooth as possible
          </span>
        </div>
          <a href={"#contact"}>
            <button className={`${classes.intro_button}`}>
              Ready to enter the future of NFT markets?
          </button>
          </a>
      </div>
    </div>
  );
}

if (process.env.NODE_ENV !== "production") IntroPage.displayName = "IntroPage";