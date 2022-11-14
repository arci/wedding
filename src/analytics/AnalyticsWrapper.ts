import React, { useEffect } from "react";
import ReactGA from 'react-ga4';
import { useLocation } from "react-router-dom";

interface AnalyticsWrapperProps {
  initialized: boolean;
  children: React.PropsWithChildren<any>;
}

export function AnalyticsWrapper(props: AnalyticsWrapperProps) {
  const location = useLocation();

  useEffect(() => {
    console.log("wrapper, " + props)
    if (props.initialized) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
      console.log("page view: " + location.pathname + location.search)
    }
  }, [props, location])

  return props.children;
}

export default AnalyticsWrapper;