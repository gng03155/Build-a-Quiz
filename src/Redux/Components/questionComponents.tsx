import React from 'react'
import {Props} from "../ComponentsWrapper/questionWrapper"
import {Wrapper,ButtonWrapper} from "../QuizStyle"


const QuestionComponents:React.FunctionComponent<Props> = props => {
    console.log(props.questionNumber);
    return (
        <Wrapper>
            {props.question && <p className = "number">
                Question : {props.questionNumber + 1} / {props.totalQuestion} 
            </p>}
            {props.question && <p dangerouslySetInnerHTML = {{__html : props.question.name}}></p>}
            {props.question && <div>
                {props.question.answers.map(answer => {
                    return<ButtonWrapper correct = {props.clicked && props.correct_answer === answer} userClicked = {props.clicked && props.userAnswer === answer}>
                    <button disabled = {props.clicked ? true : false} value = {answer} onClick = {
                        (e :React.MouseEvent<HTMLButtonElement, MouseEvent>) => props.answerClicked(props.question?.correctAnswer,e.currentTarget.value)}
                        >
                            <span dangerouslySetInnerHTML = {{__html : answer}}></span>
                          </button>
                    </ButtonWrapper>
                })}
            </div>}
            {props.clicked && !props.gameover &&<button className = "next" onClick = {() => props.nextQuestion()}>NextQuestion</button>}
            
        </Wrapper>
    )
}

export default QuestionComponents
