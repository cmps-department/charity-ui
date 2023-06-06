import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoutes from "./router/privateRoutes/PrivateRoutes";
import AdminRoutes from "./router/adminRoutes/AdminRoutes";
import Layout from "./router/Layout/Layout";

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ApplicationCreationPage = lazy(() => import('./pages/ApplicationCreationPage'));
const ApplicationPage = lazy(() => import('./pages/ApplicationPage'));
const Page404 = lazy(() => import('./pages/Page404'));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const MyApplicationsPage = lazy(() => import("./pages/MyApplicationsPage"));
const MessagesPage = lazy(() => import("./pages/MessagesPage"));
const ModeratedApplicationsPage = lazy(() => import("./pages/ModeratedApplicationsPage"));
const ModeratedApplicationPage = lazy(() => import("./pages/ModeratedApplicationPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="aboutUs" element={<AboutUsPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="createApplication" element={<ApplicationCreationPage />} />
          <Route path="favorites" element={<FavoritesPage/>} />
          <Route path="myApplications" element={<MyApplicationsPage/>} />
          <Route path="messages" element={<MessagesPage/>} />
        </Route>
        <Route element={<AdminRoutes />}>
          <Route path="moderatedApplications" element={<ModeratedApplicationsPage />} />
          <Route path="moderatedApplications/:id" element={<ModeratedApplicationPage/>} />
        </Route>
        <Route path="applications/:id" element={<ApplicationPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
