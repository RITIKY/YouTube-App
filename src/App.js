import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import Header from "./components/Header";
import store from "./utils/AppStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Watch from "./components/Watch"
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>,
        // errorElement: <MainContainer/>,
      },
      {
        path: "watch",
        element: <Watch />,
        // errorElement: <Watch/>
      },
    ],
    errorElement: <Error/>
  }
])


export default App;
