export const API_LOADING_SUCCESS = "API_LOADING_SUCCESS" ;
export const API_LOADING_FAIL = "API_LOADING_FAIL" ;
export const ANSWER_CLICKED = "ANSWER_CLICKED";
export const NO_ANSWER_CLICKED = "NO_ANSWER_CLICKED";
export const NEXT_QUESTION = "NEXT_QUESTION";
export const GAME_OVER = "GAME_OVER";


export interface OriginalQuestionType  {
    categoty : string,
    correct_answer : string,
    difficulty : string,
    incorrect_answers : string[],
    question : string,
    type : string
}

export interface QuestionType  {
    categoty : string,
    correct_answer : string,
    difficulty : string,
    incorrect_answers : string[],
    question : string,
    type : string,
    answers : string[]
}


export interface answerClick {
    type : typeof ANSWER_CLICKED | typeof NO_ANSWER_CLICKED ,
    clickAnswer : string
}

export interface noAnswerClick {
    type : typeof NO_ANSWER_CLICKED,
    clickAnswer : string
}

export interface nextQuestion{
    type : typeof NEXT_QUESTION,
}


export type apiLoadingSuccess = {
    type : typeof API_LOADING_SUCCESS,
    questionState : QuestionType[]
}

export interface apiLoadingFail {
    type : typeof API_LOADING_FAIL,
    error : any
}

export interface gameOver {
    type : typeof GAME_OVER
}

export type questionDispatchType = apiLoadingSuccess | apiLoadingFail | answerClick | nextQuestion | noAnswerClick | gameOver

