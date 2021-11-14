import { useEffect, useState } from "react";

const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getDateDiffs = (timestamp) => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;

  for (const [unit, secondsToUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsToUnit || unit === 'second') {
      const value = Math.floor(elapsed / secondsToUnit);
      return { value, unit };
    }
  }
}

export default function useTimeAgo(timestamp) {
  const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp));
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp);
      setTimeago(newTimeAgo);
    }, 1000);

    return () => clearInterval(interval);
  }, [timestamp, setTimeago]);

  const rtf = new Intl.RelativeTimeFormat('en', { style: "narrow" });

  const { value, unit } = timeago;

  return rtf.format(value, unit);
}
