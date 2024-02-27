// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
background-image:linear-gradient(${props => props.gradientValue});
min-height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
export const Heading = styled.h1`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 32px;
  text-align: center;
`
export const DirectionText = styled.p`
color: #ededed;
font-size:28px;
font-weight:400;
font-family:"Roboto";
`
export const ButtonsContainier = styled.ul`
padding-left:10px;
padding-right:10px;
width:100%;
list-style-type:none;
display:flex;
justify-content:center;
flex-wrap:wrap;
`
export const InputContainer = styled.div`
display:flex;
justify-content:space-around;
width:50%
margin-top:20px;
`
export const Div = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:10px;
`

export const ColorValue = styled.p`
font-family:"roboto";
font-size:16px;
color: #ffffff79;
font-weight:500;
padding-bottom:10px;
`
export const InputElement = styled.input`
height:50px;
width:100px;
outline:none;
cursor:pointer;
background-color:transparent;
border:none;
`
export const CustomButton = styled.button`
background-color:#00c9b7;
height:50px;
width:120px;
color:#1e293b;
font-weight:bold;
font-size:16px;
text-align:center;
margin:10px;
border-none;
border-radius:8px;
border-width:0;
`
