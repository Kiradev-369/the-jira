// set-up routing
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { GlobalStyle } from "./components/global-style/global-style";
// set up redux
import { Provider } from "react-redux";
import { store } from "./redux/config-store";
//App dùng để config
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle>
        <RouterProvider router={router}></RouterProvider>
      </GlobalStyle>
    </Provider>
  );
}

export default App;
