import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/aboutPage/AboutPage";
import MainPage from "./pages/mainPage/MainPage";
import NavBar from "./components/navBar/NavBar";
import BlogsPage from "./pages/blogsPage/BlogsPage";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/blogs"  element={ <BlogsPage />}/>
        <Route path="/login"  element={ <LoginPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
