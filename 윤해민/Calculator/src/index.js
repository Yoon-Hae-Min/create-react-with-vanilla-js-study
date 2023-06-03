import React, { render, useState } from "./React.js";
import { Route, Routes } from "./Router.js";
import MainPage from "./pages/main.js";
import ListPage from "./pages/list.js";

function App() {
  const [expressionList, setExpressionList] = useState([]);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<MainPage setExpressionList={setExpressionList} />}
        />
        <Route
          path="/list"
          element={<ListPage expressionList={expressionList} />}
        />
      </Routes>
    </div>
  );
}

render(App);
