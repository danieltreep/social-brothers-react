import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path='/social-brothers-react' element={<HomePage />} />
          <Route exact path='/blog-archief.html' element={<BlogPage />} />
        </Routes>  
      </Router>
  );
}

export default App;
