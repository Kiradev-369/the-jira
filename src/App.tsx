// set-up routing
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { GlobalStyle } from "./components/global-style/global-style";

//App dùng để config
function App() {
  return (
    <GlobalStyle>
      <RouterProvider router={router}></RouterProvider>
    </GlobalStyle>
  )
}

export default App;
