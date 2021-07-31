import {QuestionType,questionDispatchType,API_LOADING_SUCCESS,API_LOADING_FAIL,NEXT_QUESTION,ANSWER_CLICKED,NO_ANSWER_CLICKED, GAME_OVER} from "../Type/questionType"

export interface InitinalState {
    question? : QuestionType[],
    userAnswer? : string,
    success : boolean,
    questionNumber : number,
    TOTAL_QUESTION : number,
    score : number ,
    clicked : boolean,
    gameOver : boolean
}

const initialState : InitinalState = {
    success : false,
    questionNumber : 0,
    TOTAL_QUESTION : 10,
    score : 0 , 
    clicked : false,
    gameOver : true
}

export const questionReducer = (state = initialState , action : questionDispatchType):InitinalState => {
    switch(action.type){
        case API_LOADING_SUCCESS:
            return {...state , clicked : false, success : true , question : action.questionState , gameOver: false , questionNumber : 0 }
        case API_LOADING_FAIL:
            console.log(action.error);
            return {...state , success : false }
        case ANSWER_CLICKED:
            if(state.questionNumber + 1 === state.TOTAL_QUESTION){
                return {...state , userAnswer : action.clickAnswer , score : state.score + 1 , clicked : true , gameOver : true}
            }
            return {...state , userAnswer : action.clickAnswer , score : state.score + 1 , clicked : true}
        case NO_ANSWER_CLICKED:
            if(state.questionNumber + 1 === state.TOTAL_QUESTION){
                return {...state , userAnswer : action.clickAnswer , score : state.score + 1 , clicked : true , gameOver : true }
            }
            return {...state , userAnswer : action.clickAnswer , clicked : true}
        case NEXT_QUESTION:
            return {...state , questionNumber : state.questionNumber + 1 , clicked : false}
        case GAME_OVER:
            return {...state , clicked : true, questionNumber : 0, gameOver : true , score : 0}
        default:
            return {...state}
    }
}