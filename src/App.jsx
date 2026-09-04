import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Careers from './pages/Careers.jsx'
import HROperations from './pages/HROperations.jsx'
import Loopy from './pages/Loopy.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/careers" replace />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/hr-operations" element={<HROperations />} />
          <Route path="/loopy" element={<Loopy />} />
          <Route path="*" element={<Navigate to="/careers" replace />} />
        </Route>
      </Routes>
    </>
  )
}
