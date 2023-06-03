import React from "../React.js";
import { Link } from "../Router.js";
import NavBar from "../components/NavBar.js";
const ListPage = ({ expressionList }) => {
  return (
    <div>
      <NavBar />
      <h2>계산기 기록 페이지 입니다.</h2>
      <>
        {expressionList?.map((expression) => {
          return (
            <div style={{ width: "795px", border: "solid", height: "20px" }}>
              {expression}
            </div>
          );
        })}
      </>
    </div>
  );
};

export default ListPage;
