import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppAppBar from "./components/NavBar";
import Hero from "./components/MainPage";
import Footer from "./components/Footer";
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
