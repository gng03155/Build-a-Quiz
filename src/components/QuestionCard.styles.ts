import styled from "styled-components";

export const Wrapper = styled.div `
    max-width: 1100px;
    background : #ebfeff;
    border-radius : 10px;
    border : 2px solid #0085a3;
    padding : 20px;
    box-shadow : 0px 5px 10px rgba(0,0,0,0.25);
    text-align : center;

    p {
        font-size : 1rem;
    }
`

type ButtonWrapperProps = {
    correct : boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 03s ease;

    :hover {
        opacity : 0.8;
    }

    button {
        cursor : pointer;
        user-select : none;
        font-size : 0.8rem;
        width : 100%;
        height : 40px;
        margin : 5px 0;
        background : ${({correct , userClicked}) => {
                                //보기의 답과 정답이 같을 경우
            return correct ? 'linear-gradient(90deg, #56ffa4, #59bc86)' :
                    !correct && userClicked
                    //클릭한 보기가 정답과 다를 경우
                    ? 'linear-gradient(90deg, #ff5656, #c16868)'
                    // 문제를 처음 받았을 때 , 아무것도 클릭하지 않은경우
                    : 'linear-gradient(90deg, #56ccff, #6eafb4)' 
            } 
        };
        border : 3px solid solid #fff;
        box-shadow : 1px 2px 0px rgba(0,0,0,0.1);
        border-radius : 10px;
        color : #fff;
        text-shadow : 0px 1px 0px rgba(0,0,0,0.25);
        
    }

`