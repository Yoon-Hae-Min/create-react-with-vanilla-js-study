import React from "../React.js";
import { Link } from "../Router.js";
const UserPage = () => {
  return (
    <div>
      <div>user 페이지 입니다.</div>
      <Link path={"/post"} element={"post 페이지"}></Link>
      <Link path={"/"} element={"main 페이지"}></Link>
      <Link path={"/user"} element={"user 페이지"}></Link>
    </div>
  );
};

export default UserPage;
