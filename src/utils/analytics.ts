import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-0NKKLFGW8P");
};

export const trackPageView = (path: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};