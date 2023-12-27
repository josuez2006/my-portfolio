import { Route , Routes } from 'react-router';
import Home from './Pages/Home';
import './styles/main.scss'
import FurEverCaseStudy from './Pages/FurEverCaseStudy';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Home />} />
      <Route path='/work'>
        <Route index element={<FurEverCaseStudy />} />
        <Route path='fur-ever' element={<FurEverCaseStudy />} />
      </Route>
    </Routes>
  );
}

export default App;
