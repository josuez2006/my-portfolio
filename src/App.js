import { Route , Routes } from 'react-router';
import Home from './Pages/Home';
import './styles/main.scss'
import FurEverCaseStudy from './Pages/FurEverCaseStudy';
import Wrapper from './Layouts/Wrapper';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Wrapper />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/work'>
          <Route index element={<FurEverCaseStudy />} />
          <Route path='fur-ever' element={<FurEverCaseStudy />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
