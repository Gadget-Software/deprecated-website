/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  console.log(props);
  const { loading, businessInfo } = props;

  let main;
  if (loading === false && businessInfo.main) {
    main = businessInfo.main;
  } else {
    main = "loading";
  }

  const classes = useStyles();
  let landingPage;

  if (loading === false) {
    landingPage = (
      <>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          // {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg").default}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>{main.tag_line}</h1>
                <h4>{main.company_name}</h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    landingPage = (
      <>
        <div className={classes.container}>
          Loading info from backend server...this can take up to 30 seconds...
        </div>
      </>
    );
  }

  return <div>{landingPage}</div>;
}
