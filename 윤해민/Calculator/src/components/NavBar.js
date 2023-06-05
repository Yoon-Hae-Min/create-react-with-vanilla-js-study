import React from "../React.js";
import { Link } from "../Router.js";

const NavBar = () => {
  return (
    <div>
      <Link path={"/"} element={"계산기"} style={{ "margin-right": "10px" }} />
      <Link path={"/list"} element={"기록"} />
    </div>
  );
};

export default NavBar;
