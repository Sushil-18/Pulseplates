import { useEffect, useState, useCallback } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.Message || "Something went wrong, failed to send the reuqest"
    );
  }
  return resData;
}

export default function useHttp(url, config, initialData) {
  const [Data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const sendReqeust = useCallback(
    async function sendReqeust(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
        set;
      } catch (error) {
        setError(error.Message || "Something went wrong");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && config.method === "GET") || !config.method || !config) {
      sendReqeust();
    }
  }, [sendReqeust, config]);

  return {
    Data,
    isLoading,
    error,
    sendReqeust,
  };
}
