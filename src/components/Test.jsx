import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json?.slip?.advice);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
};

export default Test;
