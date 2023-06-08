
import Layout from "./components/Layout";
import Kreact from "./core/Kreact";
import createRouter from "./core/Kreact-router";
import Outlet from "./core/Kreact-router/Outlet";
import Home from "./pages/Home";
import TodoList from "./pages/Todolist";

export const router = createRouter(document.getElementById('root'),
  [
    {
      pathname: '/',
      element: Home,
      children: [
        {
          pathname: 'todolist',
          element: TodoList,
        },
      ]
    },

  ]
);

export const RouterContext = Kreact.createContext();

export default function App() {
  return (
    <Layout>
      <RouterContext.Provider value={router}>

        <Outlet pathname={window.location.pathname} />
      </RouterContext.Provider>
    </Layout>
  )
}