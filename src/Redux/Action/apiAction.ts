import {OriginalQuestionType,questionDispatchType,API_LOADING_SUCCESS,API_LOADING_FAIL} from "../Type/questionType"
import {Dispatch} from "redux"


export const fetchQuestionApi = (amount : number , difficulty : string) =>  
    async(dispatch:Dispatch<questionDispatchType>) => {
        fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`)
        .then(response => response.json())
        .then(questionList => {
            const data = questionList.results.map((question:OriginalQuestionType) => {
                let answerList = [...question.incorrect_answers, question.correct_answer].sort(()=>Math.random() - 0.5);
                return {
                    ...question,                           
                    answers : answerList
                }
            });
            console.log(data);
            dispatch({
                type : API_LOADING_SUCCESS,
                questionState : data
            })
        })
        .catch(err => dispatch({
            type : API_LOADING_FAIL,
            error : err
        }))
    }




    