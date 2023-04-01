import React from "react";


function MainPage(props){

    const [quizQuestions, setQuizQuestions] = React.useState([])
    const [isLoading, setisLoading]= React.useState(true)

    React.useEffect(function (){
        if (quizQuestions.length === 0) {
            fetch('https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple')
                .then(response => response.json())
                .then(data => {
                    setQuizQuestions(data.results)
                    setisLoading(false)
                })
                .catch(() => { console.error("Your quiz questions have not loaded"); })
        }
    }, [quizQuestions])

    console.log(quizQuestions)

    return(
        <div>
        {isLoading && quizQuestions.length === 0 ? <p> Loading quiz questions</p>: <div>{quizQuestions.map((question, index) => (
            <div key= {index}>
                <h3>{question.question}</h3>

                <ul>
                {question.incorrect_answers.map((answer, index) => (
                    <li key={index}>{answer}</li>
                ))}
                </ul>
            </div>
        ) )}</div>}
           <button onClick={props.handleClick}>Back to the start page</button>
        </div>
        
    )

    
}

export default MainPage