import React, { useEffect, useState } from "../React.js";
import NavBar from "../components/NavBar.js";

const MainPage = ({ setExpressionList }) => {
  const [expression, setExpression] = useState("");

  const handleAddExpression = (e, number) => {
    setExpression((pre) => pre + number);
  };

  const handleRemoveExpression = (e) => {
    setExpression((pre) => pre.substring(0, pre.length - 1));
  };

  const handleResetExpression = (e) => {
    setExpression(" ");
  };

  const handleCalculate = (e) => {
    setExpression((pre) => {
      if (!pre || isNaN(pre.charAt(pre.length - 1))) return pre;
      const result = eval(pre).toString();
      setExpressionList((preList) => [...preList, pre + "=" + result]);
      return result;
    });
  };

  return (
    <div>
      <NavBar />
      <h2>사칙 연산 계산기</h2>
      <div style={{ width: "795px", border: "solid", height: "20px" }}>
        {expression}
      </div>
      <div
        style={{
          display: "grid",
          "grid-template-columns": "200px 200px 200px 200px",
        }}
      >
        <button onClick={handleResetExpression}>초기화</button>
        <button onClick={handleRemoveExpression}>←</button>
        <button></button>
        <button onClick={handleCalculate}>=</button>
        <button
          onClick={(e) => {
            handleAddExpression(e, "1");
          }}
        >
          1
        </button>
        <button
          onClick={(e) => {
            handleAddExpression(e, "2");
          }}
        >
          2
        </button>
        <button
          onClick={(e) => {
            handleAddExpression(e, "3");
          }}
        >
          3
        </button>
        <button
          onClick={(e) => {
            handleAddExpression(e, "+");
          }}
        >
          +
        </button>
        <button
          onClick={(e) => {
            handleAddExpression(e, "4");
          }}
        >
          4
        </button>
        <button
          onClick={(e) => {
            handleAddExpression(e, "5");
          }}
        >
          5
        </button>
        <button
          onClick={(e) => {
            handleAddExpression(e, "6");
          }}
        >
          6
        </button>
        <button
          onClick={(e) => {
            handleAddExpression(e, "-");
          }}
        >
          -
        </button>
        <button
          onClick={(e) => {
            handleAddExpression(e, "7");
          }}
        >
          7
        </button>
        <button
          onClick={(e) => {
            handleAddExpression(e, "8");
          }}
        >
          8
        </button>
        <button
          onClick={(e) => {
            handleAddExpression(e, "9");
          }}
        >
          9
        </button>
        <button
          onClick={(e) => {
            handleAddExpression(e, "*");
          }}
        >
          *
        </button>
        <button></button>
        <button
          onClick={(e) => {
            handleAddExpression(e, "0");
          }}
        >
          0
        </button>
        <button
          onClick={(e) => {
            handleAddExpression(e, ".");
          }}
        >
          .
        </button>
        <button
          onClick={(e) => {
            handleAddExpression(e, "/");
          }}
        >
          /
        </button>
      </div>
    </div>
  );
};

export default MainPage;
