import React, { render } from "./React.js";
import { Route, Routes } from "./Router.js";
import MainPage from "./pages/main.js";
import PostPage from "./pages/post.js";
import UserPage from "./pages/user.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/post" element={<PostPage />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
      </Routes>
    </div>
  );
}

render(App);
