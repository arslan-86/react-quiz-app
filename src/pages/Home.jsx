import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
   return (
      <main className='home__main'>
         <div className="home__container">

            <h1 className='title'>Quiz App</h1>

            <div className="home__container__buttons">
               <Link to={'/select'}>
                  <button>Play Quiz</button>
               </Link>
               
               <Link to={'/highscores'}>
                  <button>High Scores</button>
               </Link>
            </div>
         </div>
      </main>
   )
}

export default Home