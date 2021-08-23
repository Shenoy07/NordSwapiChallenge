import { useEffect, useState } from "react";

export default function useChangeDate(defaultDateFormat) {
  const [readableDate, setReadableDate] = useState(" ");

  useEffect(() => {
    (async function () {
      const response = Date.parse(defaultDateFormat);
      let setDate = new Date(response);
      const read = setDate.toDateString();

      setReadableDate(() => read);
    })();
  }, []);
  return readableDate;
}
