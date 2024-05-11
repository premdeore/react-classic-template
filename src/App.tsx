import React from "react";

import "./App.css";
import AppRoutes from "./AppRoutes";
import ApiResponsePopup from "./layouts/global-api-response/GlobalApiResponse";

const App: React.FC = () => {
  return (
    <React.Fragment>
      GetBlocks
      {/* <ApiResponsePopup/> */}
      <AppRoutes />
    </React.Fragment>
  );
};

export default App;
