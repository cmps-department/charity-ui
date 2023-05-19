import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProfilePage from "./pages/ProfilePage";
import PostCreationPage from "./pages/PostCreationPage";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import Page404 from "./pages/Page404";
import FavoritesPage from "./pages/FavoritesPage";
import MyPostsPage from "./pages/MyPostsPage";
import MessagesPage from "./pages/MessagesPage";

import Header from "./components/Header";
import Footer from "./components/Footer";





import PrivateRoutes from "./router/privateRoutes/PrivateRoutes";

function App() {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/aboutUs" element={<AboutUsPage/>} />
        <Route path="/messages" element={<MessagesPage/>} />
        
        <Route element={<PrivateRoutes/>}>
          <Route path="/userProfile" element={<ProfilePage />} />
          <Route path="/createPost" element={<PostCreationPage/>} />
          <Route path="/favorites" element={<FavoritesPage/>} />
          <Route path="/myPosts" element={<MyPostsPage/>} />
        </Route>
        <Route path="/posts" element={<PostsPage/>} />
        <Route path="/posts/:id" element={<PostPage/>}/>
        <Route path="*" element={<Page404/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
