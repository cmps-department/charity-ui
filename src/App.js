import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoutes from "./router/privateRoutes/PrivateRoutes";
import Layout from "./router/Layout/Layout";

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const PostCreationPage = lazy(() => import('./pages/PostCreationPage'));
const PostPage = lazy(() => import('./pages/PostPage'));
const Page404 = lazy(() => import('./pages/Page404'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="aboutUs" element={<AboutUsPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="userProfile" element={<ProfilePage />} />
          <Route path="createPost" element={<PostCreationPage />} />
        </Route>
        <Route path="posts/:id" element={<PostPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
