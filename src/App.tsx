import "./App.css";
import HeaderMenuBar from "./Components/Header/Header";
import PagesRoutes from "./Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { BlogProvider } from "./Context/BlogContext";

function App() {
  return (
    <Router>
      <BlogProvider>
        <div className="App">
          <HeaderMenuBar />
          <div className="p-2 main-body">
            <main className="p-2" style={{minHeight: "35.5rem"}}>
              <PagesRoutes />
            </main>
            <footer>        
              <p className="copyright">Blog's project made by Jan Severino © 2023</p>
            </footer>
          </div>
        </div>
      </BlogProvider>
    </Router>
  );
}

export default App;
