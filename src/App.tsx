import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Families from './pages/Families'
import Enroll from './pages/Enroll'
import ParentInformation from './pages/ParentInformation'
import FAQs from './pages/FAQs'
import YouthSafety from './pages/YouthSafety'
import GetInvolved from './pages/GetInvolved'
import Mentor from './pages/Mentor'
import Volunteer from './pages/Volunteer'
import Partner from './pages/Partner'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Navigate to="/about" replace />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/families" element={<Families />} />
          <Route path="/families/enroll" element={<Enroll />} />
          <Route path="/families/parent-information" element={<ParentInformation />} />
          <Route path="/families/faqs" element={<FAQs />} />
          <Route path="/families/youth-safety" element={<YouthSafety />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/get-involved/mentor" element={<Mentor />} />
          <Route path="/get-involved/volunteer" element={<Volunteer />} />
          <Route path="/get-involved/partner" element={<Partner />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
