import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

import './App.css';
import Header from './components/structure/Header';
import Footer from './components/structure/Footer';
import LandingPage from './components/pages/LandingPage';
import SignInPage from './components/pages/SignInPage';
import QuickVerbPage from './components/pages/QuickVerbPage';
import AboutPage from './components/pages/AboutPage';
import NotFoundPage from './components/pages/NotFoundPage';
import CareersPage from './components/pages/CareersPage';
import SignUpPage from './components/pages/SignUpPage';
import VocabZone from './components/pages/VocabZone';
import LessonPage from './components/pages/LessonPage';
import UserArea from './components/pages/UserArea';
import LessonPrinter from './components/extras/LessonPrinter';

function App() {
  return (
    <AuthContextProvider>
      <div className='App'>
        <BrowserRouter>
          <Header />
          <div className='MainBody'>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/signIn' element={<SignInPage />} />
              <Route path='/signUp' element={<SignUpPage />} />
              <Route path='/userArea' element={<UserArea />} />
              <Route path='/aboutUs' element={<AboutPage />} />
              <Route path='/lessonZone' element={<LessonPage />} />
              <Route path='/lesson/:id' element={<LessonPrinter />} />
              <Route path='/vocabZone' element={<VocabZone />} />
              <Route path='/quickVerb' element={<QuickVerbPage />} />
              <Route path='/hublCareers' element={<CareersPage />} />
              <Route path='/*' element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </ AuthContextProvider>
  );
}

export default App;
