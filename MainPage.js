import React from "react";


function MainPage(props){

    const [quizQuestions, setQuizQuestions] = React.useState([])
    const [isLoading, setisLoading]= React.useState(true)

    React.useEffect(function (){

        fetch('https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple')
            .then(response => response.json)
            .then(data => {
                setQuizQuestions(data)
                setisLoading(false)
            })
            .catch(console.error("Your quiz questions have not loaded"))
            setisLoading(false)
    }, [])

    console.log(quizQuestions)



    /*function quizPage(){
        setQuizQuestions(quizQuestions => quizQuestions.map(question, index => {
            <div key= {index}>
                <h3>{question.question}</h3>
                <ul>
                {question.answers.map((answer, index) => (
                  <li key={index}>{answer}</li>
                ))}
              </ul>
            </div>
        }))
    }*/


    return(
        <div>
        {isLoading ? <p> Loading quiz questions</p>: <p>{quizQuestions}</p>}
           <button onClick={props.handleClick}>Back to the start page</button>
        </div>
        
    )

    
}

export default MainPage