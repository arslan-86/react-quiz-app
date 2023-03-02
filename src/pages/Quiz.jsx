import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import questions from '../../question'

function Quiz({ url }) {
  const [quiz, setQuiz] = useState(questions);
  const [counter, setCounter] = useState(0);
  
  const { isLoading, isError, error, data} = useQuery({
    queryKey: ['quiz'],
    queryFn: (url) => { fetch(url).then(res => res.json())}
  })

  if(isLoading){
    console.log('loading')
  }
  if(isError){
    console.log(error)
  }

  console.log(data)


  


 
function handleClick(e){
 

  
}
  

  return (
    <div className="quiz__container">
      <h1>{quiz[counter].question}</h1>
      <div className="answers">
        <p onClick={handleClick}>
          <span>A</span>
          {quiz[counter].incorrect_answers[0]}
        </p>
        <p onClick={handleClick}>
          <span>B</span>
          {quiz[counter].incorrect_answers[1]}
        </p>
        <p onClick={handleClick}>
          <span>C</span>
          {quiz[counter].incorrect_answers[2]}
        </p>
        <p onClick={handleClick}>
          <span>D</span>
          {quiz[counter].incorrect_answers[3]}
        </p>
      </div>
    </div>
  )
}

export default Quiz