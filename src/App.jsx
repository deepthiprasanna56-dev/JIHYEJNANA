import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import EnrollmentModal from './components/EnrollmentModal';
import PromptShowcaseModal from './components/PromptShowcaseModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';

function App() {
  const [enrollModalCourse, setEnrollModalCourse] = useState(null);
  const [promptModalOpen, setPromptModalOpen] = useState(false);

  const handleOpenEnrollment = (course) => {
    setEnrollModalCourse(course);
  };

  const handleCloseEnrollment = () => {
    setEnrollModalCourse(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#050811] text-slate-100 selection:bg-[#E6CA85] selection:text-black">
        {/* Luxury Top Navigation */}
        <Navbar onOpenPromptShowcase={() => setPromptModalOpen(true)} />

        {/* Dynamic Route Viewports */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onEnrollCourse={handleOpenEnrollment}
                  onOpenPromptShowcase={() => setPromptModalOpen(true)}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/courses"
              element={<Courses onEnrollCourse={handleOpenEnrollment} />}
            />
            <Route
              path="/courses/:id"
              element={<CourseDetails onEnrollCourse={handleOpenEnrollment} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Modals */}
        <EnrollmentModal
          isOpen={!!enrollModalCourse}
          onClose={handleCloseEnrollment}
          course={enrollModalCourse}
        />

        <PromptShowcaseModal
          isOpen={promptModalOpen}
          onClose={() => setPromptModalOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;
