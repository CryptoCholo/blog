import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import BlogArticle from "./pages/blogArticle";
import Login from "./pages/login";
import Signup from "./pages/signup"
import Main from "./components/main";

function App() {
  return (
    <div className="App w-screen h-screen relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="/" element={<Main/>} />
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<Signup/>} />
            <Route path="article" element={<BlogArticle/>} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App
