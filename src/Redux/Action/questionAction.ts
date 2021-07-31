import {questionDispatchType , ANSWER_CLICKED ,NO_ANSWER_CLICKED, NEXT_QUESTION} from "../Type/questionType"

export const fatchNextQuestion = () :questionDispatchType => {
    return {
        type : NEXT_QUESTION
    }
}

export const fatchAnswerClick = (answer : string , right : boolean) : questionDispatchType => {
    if(right){
        return {
            type : ANSWER_CLICKED,
            clickAnswer : answer
        }
    }
    else{
        return {
            type : NO_ANSWER_CLICKED,
            clickAnswer : answer
        }  
    }
}