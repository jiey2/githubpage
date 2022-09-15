import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

const Pause = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format("YYYY-MM-DD (dddd) HH:mm:ss:SSS"));
    }, 1);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      The current time is <b>{time}</b>
      <br />
      {/* <br /> */}
      The site has been paused.
    </>
  );
};

export default Pause;
