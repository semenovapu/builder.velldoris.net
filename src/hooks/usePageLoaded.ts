import { useState, useEffect } from "react";

//хук для проверки загружена ли страница полностью
const usePageLoaded = (): boolean => {
  const [pageIsLoaded, setPageIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      //console.log("page loaded");
      setPageIsLoaded(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return pageIsLoaded;
};

export default usePageLoaded;
