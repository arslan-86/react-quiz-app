import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import './main.scss'

// const router = createBrowserRouter([
//    {
//       path: '/',
//       element: <Home />
//    },
//    {
//       path: '/select',
//       element: <SelectQuiz />
//    },
//    {
//       path: '/quiz',
//       element: <Quiz />
//    },
//    {
//       path: '/highscores',
//       element: <HighScores />
//    },
// ])

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
   <QueryClientProvider client={queryClient}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </QueryClientProvider>
)


