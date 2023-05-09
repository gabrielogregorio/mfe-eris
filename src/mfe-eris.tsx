import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import "./tailwind.css";

const lifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (props: any) => {
    return <Root />;
  },
  errorBoundary() {
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifeCycles;
