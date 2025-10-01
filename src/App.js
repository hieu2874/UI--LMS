import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Layout from './components/layout';
import CoursePage from './components/CoursePage';
import CourseDetail from './components/CourseDetail';
import NotFound from './components/NotFound';
import { LmsProvider } from "./components/LmsContext";



function App() {
  return (
    <LmsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </LmsProvider>
  );
}

export default App;
