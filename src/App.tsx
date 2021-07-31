import React , {useState} from 'react';
import {useSelector} from "react-redux"
//components
import MainComponents from "./Redux/ComponentsWrapper/mainWrapper"
import QuestionComponents from "./Redux/ComponentsWrapper/questionWrapper"
//Type
import {ReducerType} from "./Redux/store"
// style
import {GlobalStyle} from "./App_styles";



const App : React.FC = () => {
  const loading = useSelector((state:ReducerType) => state.success);
  console.log(loading);
  return(
    <>
    
    <div>
        <MainComponents></MainComponents>
        {loading && <QuestionComponents></QuestionComponents>}
    </div>
    <GlobalStyle></GlobalStyle>
    </>
  );
}

export default App;



// import React , {useState} from 'react';
// import {fetchQuizQuestion} from "./prev/API"
// // Components
// import QuestionCard from "./components/QuestionCard"
// // types
// import {QuestionState, Difficulty} from "./prev/API"
// // style
// import {GlobalStyle , Wrapper} from "./App_styles";

// export type AnswerObject = {
//   question : string,
//   answer : string,
//   correct : boolean,
//   correctAnswer : string
// }

// const TOTAL_QUESTION = 10;

// const App = () => {
  
//   const [loading , setLoading] = useState(false);
//   const [questions , setQuestion] = useState<QuestionState[]>([]);
//   const [number , setNumber] = useState(0);
//   const [userAnswers , setUserAnswers] = useState<AnswerObject[]>([]);
//   const [score , setScore] = useState(0);
//   const [gameOver , setGameOver] = useState(true);

//   console.log(userAnswers);

//   const startTrivia = async () => {
//     setLoading(true);
//     setGameOver(false);

//     const newQeustion = await fetchQuizQuestion(
//       TOTAL_QUESTION,
//       Difficulty.EASY
//     );

//     setQuestion(newQeustion);
//     setScore(0);
//     setUserAnswers([]);
//     setNumber(0);
//     setLoading(false);
//   }
  
//   const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {
//     if (!gameOver) {
//       //유저가 선택한 정답
//       const answer = e.currentTarget.value;
//       //유저의 정답과 문제의 정답이 맞는지 확인
//       const correct = questions[number].correct_answer === answer;
      
//       // 정답을 맞췄을 경우
//       if(correct){
//         setScore(prev => prev + 1);
//       }
//       //정답버튼 비활성화
//       const answerObject = {
//         question : questions[number].question,
//         answer,
//         correct,
//         correctAnswer : questions[number].correct_answer
//       };
//       setUserAnswers(prev => [...prev, answerObject]);
//     }
//   }

//   const nextQuestion = () => {
//     // 다음 문제로 넘어가기
//     const nextQuestion = number + 1;
//     if(nextQuestion === TOTAL_QUESTION){
//       setGameOver(true);
//     }else{
//       setNumber(nextQuestion);
//     }

//   }

//   return (
//     <>
//     <GlobalStyle></GlobalStyle>
//     <Wrapper>
//       <h1>REACT QUIZ</h1>
//         {gameOver || userAnswers.length === TOTAL_QUESTION ? (
//       <button className = "start" onClick={startTrivia}>Start</button>
//       ) : null}
//       {!gameOver ? <p className = "score">Score : {score} </p> : null}
//       {loading && <p>Loading Question ...</p>}
//       {!loading && !gameOver && (
//        <QuestionCard
//         questionNum = {number + 1} 
//         totalQuestion = {TOTAL_QUESTION}
//         question = {questions[number].question} 
//         answers = {questions[number].answers}
//         userAnswer = {userAnswers ? userAnswers[number] : undefined}
//         callback = {checkAnswer}
//       ></QuestionCard> 
//       )}
//       {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTION - 1 ?
//       <button className = "next" onClick = {nextQuestion}>NextQuestion</button> : null}
//     </Wrapper>
//     </>
//   );
// }

// export default App;
