import React, { ReactElement, useState } from "react";
import classes from "./carousel.module.scss";

enum Entries {
  first,
  second,
  third
};

const carouselOptions = {
  [Entries.third]: "Once you’ve set up your wallet of choice, connect it to CryptoPlaze! Learn more about what wallets we support.",
  [Entries.second]: "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content",
  [Entries.first]: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!"
}

export const Carousel = (): ReactElement => {
  const [currentActive, setCurrentActive] = useState(Entries.first);
  const active = {
    first: currentActive === Entries.first,
    second: currentActive === Entries.second,
    third: currentActive === Entries.third,
  };

  const setActive = (p: Entries) => () => {
    setCurrentActive(p);
  }

  const nextStep = () => {
    switch (currentActive) {
      case Entries.first:
        setCurrentActive(Entries.second);
        return;
      case Entries.second:
        setCurrentActive(Entries.third);
        return;
      case Entries.third:
        setCurrentActive(Entries.first);
        return;
    }
  }

  const preStep = () => {
    switch (currentActive) {
      case Entries.first:
        setCurrentActive(Entries.third);
        return;
      case Entries.second:
        setCurrentActive(Entries.first);
        return;
      case Entries.third:
        setCurrentActive(Entries.second);
        return;
    }
  }

  return (
    <div data-aos="fade-up" className={`${classes.portfolio_quotes_wrapper}`}>
      <div className="container">
        <div className={`row ${classes.portfolio_quotes_navigation_wrapper}`}>
          <div className={`${classes.portfolio_quotes_navigation} col-12`}>
            <div className={classes.portfolio_quotes_navigation_option_wrapper}>
              <span onClick={setActive(Entries.first)} className={`${classes.portfolio_quotes_navigation_option} ${classes.title} ${active.first && classes.active}`}>Setup a wallet</span>
            </div>
            <div className={classes.portfolio_quotes_navigation_option_wrapper}>
            <span onClick={setActive(Entries.second)} className={`${classes.portfolio_quotes_navigation_option} ${classes.title} ${active.second && classes.active}`}>Add your NFTs</span>
            </div>
            <div className={classes.portfolio_quotes_navigation_option_wrapper}>
            <span onClick={setActive(Entries.third)} className={`${classes.portfolio_quotes_navigation_option} ${classes.title} ${active.third && classes.active}`}>Sell your NFTs</span>
            </div>
            <div className={`
              ${classes.border}
              ${active.first && classes.first}
              ${active.second && classes.second}
              ${active.third && classes.third}
              d-md-block d-none
            `}></div>
          </div>
        </div>
        <div className={`row py-5 ${classes.quote_min_height}`}>
          <div className={`col-12 col-md-10 offset-lg-1 ${classes.quote_wrapper}`}>
            <span onClick={preStep} className={`${classes.arrow} ${classes.left}`}>&#60;</span>
            <span className={`${classes.quote}`}>
             {carouselOptions[currentActive]}
            </span>
            <span onClick={nextStep} className={`${classes.arrow} ${classes.right}`}>&#62;</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <span onClick={setActive(Entries.third)} className={`${classes.indicator} ${active.first && classes.active}`}>
              {active.first && <span className={`${classes.filler}`}></span>}
            </span>
            <span onClick={setActive(Entries.second)} className={`${classes.indicator} ${active.second && classes.active}`}>
              {active.second && <span className={`${classes.filler}`}></span>}
            </span>
            <span onClick={setActive(Entries.first)} className={`${classes.indicator} ${active.third && classes.active}`}>
              {active.third && <span className={`${classes.filler}`}></span>}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

if (process.env.NODE_ENV !== "production") Carousel.displayName = "carousel";