import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppAppBar from "./marketing-page/components/AppAppBar";
import Hero from "./marketing-page/components/Hero";
import LogoCollection from "./marketing-page/components/LogoCollection";
import Highlights from "./marketing-page/components/Highlights";
import Pricing from "./marketing-page/components/Pricing";
import Features from "./marketing-page/components/Features";
import Testimonials from "./marketing-page/components/Testimonials";
import FAQ from "./marketing-page/components/FAQ";
import Footer from "./marketing-page/components/Footer";
import AppTheme from "./shared-theme/AppTheme";
import { Typography, Stack } from "@mui/material";

export default function HomePage(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar bgColor={props.bgColor}/>
      <Hero />
      <div>
        {/* <LogoCollection /> */}
        {/* <Features /> */}
        <Divider />
        {/* <Highlights /> */}
        <Divider />
        {/* <Pricing /> */}
        <Divider />
        {/* <FAQ /> */}
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
