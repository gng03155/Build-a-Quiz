import React , {useState} from 'react';
import {useSelector} from "react-redux"
//components
import MainComponents from "./ComponentsWrapper/mainWrapper"
import QuestionComponents from "./ComponentsWrapper/questionWrapper"
//Type
import {ReducerType} from "./store"
// style
import {GlobalStyle , Wrapper} from "../App_styles";



const App = () => {
  const [loading,setLoading] = useState(false);
  setLoading(useSelector((state:ReducerType) => state.success));
  console.log(loading);
  return(
    <>
    <GlobalStyle></GlobalStyle>
    <Wrapper>
      {/* <MainComponents></MainComponents>
      {loading && <QuestionComponents></QuestionComponents>} */}
    </Wrapper>
    </>
  );
}

export default App;
