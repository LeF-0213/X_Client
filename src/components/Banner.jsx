import React, { memo } from "react";

const Banner = memo(({ text, isAlert }) => (
  <>{text && <p className={`banner ${isAlert ? "banner-red" : "banner-green"}`}></p>}</>
));

export default Banner;
