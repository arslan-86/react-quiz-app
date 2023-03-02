import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, Quiz, SelectQuiz, HighScores } from './pages';


function App() {
   //state for setting the URl for the quiz api
   const [url, setUrl] = useState('') 

   return (
      <>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/select' element={<SelectQuiz setUrl={setUrl} />} />
         <Route path='/quiz' element={<Quiz url={url} />} />
         <Route path='/highscores' element={<HighScores />} />
      </Routes>
      </>
   )
}

export default App

