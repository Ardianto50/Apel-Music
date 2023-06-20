import React, { createContext, useContext, useState, useEffect } from "react";

const CommonContext = createContext();

const CommonProvider = ({ children }) => {
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    setBaseUrl(process.env.REACT_APP_BACKEND_API_URL);
    console.log("test");
  }, []);

  return (
    <CommonContext.Provider value={{ baseUrl }}>
      {children}
    </CommonContext.Provider>
  );
};

export default CommonProvider;

export const useCommmonContext = () => {
  const context = useContext(CommonContext);

  if (!context) {
    throw new Error("useCommonContext must be used within the CommonProvider");
  }

  return context;
};
