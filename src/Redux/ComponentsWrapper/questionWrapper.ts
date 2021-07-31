import React, { Dispatch } from 'react'
import QuestionComponents from "../Components/questionComponents"
import {connect} from "react-redux"
import {fatchNextQuestion , fatchAnswerClick} from "../Action/questionAction"
import {questionDispatchType} from "../Type/questionType"
import {InitinalState} from "../Reducer/questionReducer"


const mapStateToProps = ({questionNumber,TOTAL_QUESTION,question,clicked,userAnswer,gameOver}:InitinalState) => (
    {
        questionNumber : questionNumber,
        totalQuestion : TOTAL_QUESTION,
        clicked : clicked,
        question : question ?  {
            name : question[questionNumber].question,
            correctAnswer : question[questionNumber].correct_answer ,
            answers : question[questionNumber].answers 
        } : undefined,
        correct_answer : question ? question[questionNumber].correct_answer  : undefined,
        userAnswer : userAnswer,
        gameover : gameOver
   }
);

const mapDispatchToProps = (dispatch:Dispatch<questionDispatchType>) => {
   return {
    answerClicked : (correct:any , answer:any) => {
        if(correct === answer){
            dispatch(fatchAnswerClick(answer , true));
        }else{
            dispatch(fatchAnswerClick(answer , false));
        }
    },
    nextQuestion : () => dispatch(fatchNextQuestion())
   }
};
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {}
export type Props = StateProps & DispatchProps & OwnProps & {};
export default connect<StateProps, DispatchProps,OwnProps,InitinalState>(mapStateToProps,mapDispatchToProps)(QuestionComponents)