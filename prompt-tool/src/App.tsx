import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Templates from './pages/Templates';
import Optimizer from './pages/Optimizer';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/optimizer" element={<Optimizer />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
