import './App.css';
import Home from './Components/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import LiteraryCriticism from './Components/FourthYear/LiteraryCriticism/LiteraryCriticism';
import NineteenCenturyNovel from './Components/FourthYear/19thCenturyNovel/NineteenCenturyNovel';
import Navbar from './Components/Home/Navbar/Navbar';
import TwentyCenturyPoetry from './Components/FourthYear/20thCenturyPoetry/TwentyCenturyPoetry';
import ModernDrama from './Components/FourthYear/ModernDrama/ModernDrama';
import TwentyCenturyNovel from './Components/FourthYear/20thCenturyNovel/TwentyCenturyNovel';
import AmericanPoetry from './Components/FourthYear/AmericanPoetry/AmericanPoetry';
import FictionDrama from './Components/FourthYear/FictionDrama/FictionDrama';
import ClassicsTranslation from './Components/FourthYear/ClassicsTranslation/ClassicsTranslation';
import ContinentalLiterature from './Components/FourthYear/ContinentalLiterature/ContinentalLiterature';
import LanguageTeaching from './Components/FourthYear/LanguageTeaching/LanguageTeaching';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import ProtectedRoute from './Components/Login/ProtectedRoute/ProtectedRoute';
import NinethNovelPostData from './Components/FourthYear/19thCenturyNovel/NinethNovelPostData/NinethNovelPostData';



function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/criticism" element={<LiteraryCriticism />} />
          <Route path="/19-novel" element={<NineteenCenturyNovel />} />
          <Route path="/20-poetry" element={<TwentyCenturyPoetry />} />
          <Route path="/modern-drama" element={<ModernDrama />} />
          <Route path="/20-novel" element={<TwentyCenturyNovel />} />
          <Route path="/american-poetry" element={<AmericanPoetry />} />
          <Route path="/fiction-drama" element={<FictionDrama />} />
          <Route path="/classics-translation" element={<ClassicsTranslation />} />
          <Route path="/continental-literature" element={<ContinentalLiterature />} />
          <Route path="/19th-century-novel" element={<NinethNovelPostData />} />
          {/* <Route path="/language-teaching" element={<LanguageTeaching />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/language-teaching" element=
            {<ProtectedRoute>
              <LanguageTeaching />
            </ProtectedRoute>
            }
          />

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
