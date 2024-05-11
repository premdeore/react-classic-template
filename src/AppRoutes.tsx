import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { AppUrls } from "./AppUrls";
import NotFoundPage from "./pages/nonFoundPage/NotFoundPage";

const AppRoutes = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path={AppUrls.Client.Home} element={<HomePage />} />
          <Route
            path={AppUrls.Client.NotFoundPage}
            element={<NotFoundPage />}
          />
          <Route
            path="*"
            element={<Navigate replace to={AppUrls.Client.NotFoundPage} />}
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default AppRoutes;
