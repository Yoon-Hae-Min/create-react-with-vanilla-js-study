import React from "../React.js";
import { Link } from "../Router.js";
const MainPage = () => {
  return (
    <div>
      <h1>메인 페이지 입니다.</h1>
      <Link path={"/post"} element={"post 페이지"}></Link>
      <Link path={"/"} element={"main 페이지"}></Link>
      <Link path={"/user"} element={"user 페이지"}></Link>
    </div>
  );
};

export default MainPage;
