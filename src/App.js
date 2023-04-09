import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProfilePage from "./pages/ProfilePage";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import Page404 from "./pages/Page404";

import PrivateRoutes from "./router/privateRoutes/PrivateRoutes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/aboutUs" element={<AboutUsPage/>} />
        <Route element={<PrivateRoutes/>}>
          <Route path="/userProfile" element={<ProfilePage/>}/>
        </Route>
        <Route path="/posts" element={<PostsPage/>} />
        <Route path="/posts/:id" element={<PostPage/>}/>
        <Route path="*" element={<Page404/>} />
      </Routes>
    </div>
  );
}

export default App;
