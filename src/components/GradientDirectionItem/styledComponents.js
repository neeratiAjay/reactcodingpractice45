// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li``

export const CustomButton = styled.button`
background-color:#ffffff;
color:${props =>(props.isActive ? ' #334155' : '#1e293b')};
font-family:"roboto";
font-weight:bold;
font-size:14px;
border:none;
border-radius:8px;
height:50px;
width:120px;
text-align:center;
margin:10px;
opacity:${props => (props.isActive ? 1 : 0.5)};
`
