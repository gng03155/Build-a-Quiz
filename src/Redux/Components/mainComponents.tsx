import React from 'react'
import {Props} from "../ComponentsWrapper/mainWrapper"
import {GlobalStyle , Wrapper} from "../../App_styles";

const MainComponents:React.FunctionComponent<Props>= ({loading,score,gameover,startQuiz} : Props) => (
    <Wrapper>
        <h1>REACT QUIZ</h1>
        {gameover && <button className = "start" onClick={() => startQuiz(10,"easy")}>Start</button>}
        <p className = "score">Score : {score} </p>
        {!loading && <p>Loading Question ...</p>}
    </Wrapper>
)
export default MainComponents
