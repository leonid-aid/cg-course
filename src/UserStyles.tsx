import styled from "styled-components";

export const UlCommentStyle = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    @media (max-width: 699px){
    margin-left: 28px;
    margin-right: 28px;
}
`
export const LiCommentStyle = styled.li`
    display: flex;
    flex-direction: column;
    border-bottom: 1.5px solid rgba(177, 176, 176, 0.5) ;
`
export const CommentsHeader = styled.div`
font-family: Work Sans;
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: 44px;    
border-bottom: 2px solid rgba(107, 107, 107, 0.5);
margin: 0;
margin-top: 60px;
padding-bottom: 16px;

`
export const CommentHeaderText = styled.p`
/* margin-left: 165px;
margin-right: 165px; */
`


export const NameStyle = styled.div`
margin-top:12px;
font-family: Work Sans;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: 36px;
/* margin-left: 165px;
margin-right: 165px; */
`

export const TextCommentStyled = styled.div`
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 30px;
margin-bottom:12px;

@media (max-width: 699px){
    margin-right: 28px;
}
 
@media (min-width: 700px) and (max-width: 1440px){
    margin-right: 165px;
}   
@media (min-width: 1441px){
    margin-right: 365px;
}
`


