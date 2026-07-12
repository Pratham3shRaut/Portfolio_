"use client";

import { useEffect, useState } from "react";

export function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()));
    update();
    const timer = window.setInterval(update, 30_000);
    return () => clearInterval(timer);
  }, []);
  return <span className="tabular-nums" aria-label={`Local time in India ${time}`}>{time ? `${time} IST` : "IST"}</span>;
}
