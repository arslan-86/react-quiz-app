import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SelectQuiz({setUrl}) {
   const [form, setForm] = useState({
      amount: 10,
      category: 9,
      difficulty: 'easy'
   })

   let navigate = useNavigate();

   function handleSubmit(e) {
      e.preventDefault();
      // https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple
      const url = `https://opentdb.com/api.php?amount=${form.amount}&category=${form.category}&difficulty=${form.difficulty}&type=multiple`
      setUrl(url)

      navigate('/quiz')
   }

   function handleChange(e) {
      setForm({
         ...form,
         [e.target.name]: e.target.value
      })
   }

   return (
      <div className="form__container">
         <form id='quiz__info__form' onSubmit={handleSubmit}>
         <h1>Fill in the details</h1>
            <input
               type="number"
               min={0}
               value={form.amount}
               name='amount'
               onChange={handleChange} />

            <select
               name='category'
               id='category'
               value={form.category}
               onChange={handleChange}>
               <option value="9">General Knowlege</option>
               <option value="18">Computer Science</option>
               <option value="23">History</option>
               <option value="19">Mathematics</option>
               <option value="20">Mythology</option>
               <option value="22">Geography</option>
            </select>

            <select
               name="difficulty"
               id="difficulty"
               value={form.difficulty}
               onChange={handleChange}>
               <option value="easy">Easy</option>
               <option value="medium">Medium</option>
               <option value="hard">Hard</option>
            </select>

            <button>Submit</button>
         </form>
      </div>
   )
}

export default SelectQuiz