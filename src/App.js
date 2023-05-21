import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoutes from "./router/privateRoutes/PrivateRoutes";
import Layout from "./router/Layout/Layout";

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const PostCreationPage = lazy(() => import('./pages/PostCreationPage'));
const PostPage = lazy(() => import('./pages/PostPage'));
const Page404 = lazy(() => import('./pages/Page404'));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const MyPostsPage = lazy(() => import("./pages/MyPostsPage"));
const MessagesPage = lazy(() => import("./pages/MessagesPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="aboutUs" element={<AboutUsPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="createPost" element={<PostCreationPage />} />
          <Route path="favorites" element={<FavoritesPage/>} />
          <Route path="myPosts" element={<MyPostsPage/>} />
          <Route path="messages" element={<MessagesPage/>} />
        </Route>
        <Route path="posts/:id" element={<PostPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
