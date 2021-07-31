import React, { Dispatch } from 'react'
import MainComponents from "../Components/mainComponents"
import {connect} from "react-redux"
import {fetchQuestionApi} from "../Action/apiAction"
import {InitinalState} from "../Reducer/questionReducer"
import {questionDispatchType} from "../Type/questionType"

const mapStateToProps = ({success,score,gameOver}:InitinalState) => ( 
    {
        loading : success,
        score : score,
        gameover : gameOver
    }
);

const mapDispatchToProps = (dispatch:any) => {
    return {
        startQuiz : (amont:number,difficult:string) => dispatch(fetchQuestionApi(amont,difficult))
    }
};
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {}
export type Props = StateProps & DispatchProps & OwnProps & {};
export default connect<StateProps, DispatchProps,OwnProps,InitinalState>(mapStateToProps,mapDispatchToProps)(MainComponents)
