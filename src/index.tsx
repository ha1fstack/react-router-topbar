/* eslint-disable import/no-default-export -- lib */
"use client";

import * as NProgress from "nprogress";
import * as React from "react";
import { useLocation, useNavigation } from "react-router-dom";

export interface ReactRouterTopbar {
  /**
   * Color for the Topbar.
   * @defaultValue `"#29d"`
   */
  color?: string;
  /**
   * The initial position for the Topbar in percentage, 0.08 is 8%.
   * @defaultValue `0.08`
   */
  initialPosition?: number;
  /**
   * The increament delay speed in milliseconds.
   * @defaultValue `200`
   */
  crawlSpeed?: number;
  /**
   * The height for the Topbar in pixels (px).
   * @defaultValue `3`
   */
  height?: number;
  /**
   * Auto increamenting behaviour for the Topbar.
   * @defaultValue `true`
   */
  crawl?: boolean;
  /**
   * To show spinner or not.
   * @defaultValue `true`
   */
  showSpinner?: boolean;
  /**
   * Animation settings using easing (a CSS easing string).
   * @defaultValue `"ease"`
   */
  easing?: string;
  /**
   * Animation speed in ms for the Topbar.
   * @defaultValue `200`
   */
  speed?: number;
  /**
   * Defines a shadow for the Topbar.
   *
   * You can disable it by setting it to `false`
   * @defaultValue `0 0 10px ${color},0 0 5px ${color}`
   */
  shadow?: string | false;
  /**
   * Defines a template for the Topbar.
   * @defaultValue
   * ```jsx
   * <div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>
   * ```
   */
  template?: string;
  /**
   * Defines zIndex for the Topbar.
   * @defaultValue `1600`
   *
   */
  zIndex?: number;
  /**
   * To show the Topbar at bottom.
   * @defaultValue `false`
   *
   */
  showAtBottom?: boolean;
}

/**
 *
 * ReactRouterTopbar
 * @param props - The properties to configure ReactRouterTopbar
 * @returns `React.JSX.Element`
 *
 */
const ReactRouterTopbar = ({
  color: propColor,
  height: propHeight,
  showSpinner,
  crawl,
  crawlSpeed,
  initialPosition,
  easing,
  speed,
  shadow,
  template,
  zIndex = 1600,
  showAtBottom = false,
}: ReactRouterTopbar): React.JSX.Element => {
  const defaultColor = "#29d";
  const defaultHeight = 3;

  const color = propColor ?? defaultColor;
  const height = propHeight ?? defaultHeight;

  // Any falsy (except undefined) will disable the shadow
  const boxShadow =
    // eslint-disable-next-line no-nested-ternary -- -
    !shadow && shadow !== undefined
      ? ""
      : shadow
        ? `box-shadow:${shadow}`
        : `box-shadow:0 0 10px ${color},0 0 5px ${color}`;

  // Check if to show at bottom
  const positionStyle = showAtBottom ? "bottom: 0;" : "top: 0;";
  const spinnerPositionStyle = showAtBottom ? "bottom: 15px;" : "top: 15px;";

  /**
   * CSS Styles for the NextTopbar
   */
  const styles = (
    <style>
      {`#nprogress{pointer-events:none}#nprogress .bar{background:${color};position:fixed;z-index:${zIndex};${positionStyle}left:0;width:100%;height:${height}px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;${boxShadow};opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:${zIndex};${spinnerPositionStyle}right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:${color};border-left-color:${color};border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`}
    </style>
  );

  NProgress.configure({
    showSpinner: showSpinner ?? true,
    trickle: crawl ?? true,
    trickleSpeed: crawlSpeed ?? 200,
    minimum: initialPosition ?? 0.08,
    easing: easing ?? "ease",
    speed: speed ?? 200,
    template:
      template ??
      '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
  });

  return (
    <>
      {styles}
      <LocationControl />
      <NavigationControl />
    </>
  );
};
export default ReactRouterTopbar;

function LocationControl() {
  const location = useLocation();

  const routeKeyRef = React.useRef(location.key);

  React.useEffect(() => {
    if (routeKeyRef.current === location.key) {
      NProgress.done();
    }
  });

  if (location.key !== routeKeyRef.current) {
    NProgress.start();
    routeKeyRef.current = location.key;
  }

  return null;
}

function NavigationControl() {
  const navigation = useNavigation();

  React.useEffect(() => {
    if (navigation.state === "loading" || navigation.state === "submitting") {
      NProgress.start();
    }

    if (navigation.state === "idle") {
      NProgress.done();
    }
  }, [navigation.state]);
  ``;

  return null;
}
