import { useEffect, useState } from "react";
import ReactGA from 'react-ga4';

export function useAnalytics() {
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    console.log("analytics")
    if (!window.location.href.includes('localhost')) {
      ReactGA.initialize("");
    }
    setInitialized(true)
  }, [])

  return {
    initialized
  }
}