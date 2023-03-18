import './App.css';
import React from 'react';
import FrontPage from './Components/FrontPage'
import MainPage from './Components/MainPage'

function App() {

const [showQuiz, setShowQuiz] = React.useState(false)

function handleQuizClick(){
  setShowQuiz(prevShowQuizState=> !prevShowQuizState)
}

  
  return (
    <main>
      {showQuiz ? (<MainPage handleClick={handleQuizClick} />):(<FrontPage handleClick={handleQuizClick}/>)}
    </main>
    
  )
  }
export default App;
