import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import ContentLayout from "./layout/ContentLayout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<ContentLayout />}>
            <Route path={"/"} element={<Home />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path={"/sign-in"} element={<SignIn />} />
            <Route path={"/sign-up"} element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
