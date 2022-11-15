import { useEffect, useState } from "react";
import ReactGA from 'react-ga4';

export function useAnalytics() {
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      ReactGA.initialize("");
      console.log('GA initialized')
    }
    setInitialized(true)
  }, [])

  return {
    initialized
  }
}