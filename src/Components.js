import styled from 'styled-components';

export const Container = styled.div`
background-color: #fff;
border-radius: 11px;
box-shadow: 0 14px 28px rgba (0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
position : relative ;
overflow: hidden;
 width: 678px;
 max-width: 100%;
 min-height:400px;
`;

export const SingUpContainer=styled.div`
position:absolute;
top :0;
height: 100%;
transition : all 0.6s ease-in-out;
left:0;
width:50%;
opacity: 0;
z-index:1;
${props => props.signIn !== true ? ` transform: translateX(100%); opacity:1; z-index: 5;`
:null}
`;


export const SingInContainer=styled.div`
position:absolute;
top :0;
height: 100%;
transition : all 0.6s ease-in-out;
left:0;
width:50%;
opacity: 0;
z-index:2;
${props => (props.signIn !== true ? ` transform: translateX(100%);`: null)}

`;


export const Form =styled.form`
background:#fffff;
display: flex;
align-items: center;
justify-content:center;
flex-direction:column;
padding: 0 50px;
height:100%
text-align: center;
`
export const Title= styled.h1`
font-weight: bold;
margin:0;
`;

export const Input= styled.Input`
backgroud-color:#eee;
border:none;
padding: 12px 15px;
margin: 8px 0;
width:100%;
`;
export const Button= styled.button`
border-radius: 20px;
border: 1px solid #ff4b2b;
background-color: #ff4b2b;
color: #fffff;
font-size: 12px;
font-weigth:bold;
padding: 12px 45px ;
letter-spacing: 1px ;
text-transform : uppercase;
transition : transform 80ms ease-in;
&:active{
    transform: scale(0.95);
}
&:focus{
    outline: none;
}
`;
export const GhostButton= styled.(Button)`
background-color:transparent;
border-color:#ffffff;
`;

export const Anchor= styled.a`
color:#333;
font-size:14px;
text-decoration:none;
margin: 15px 0;
`;

export const OverlayContainer = styled.di`
position: absolute;
top:0;
left:50%;
width:50%;
height:100%;
overflow:hidden;
transistion:transition 0.6s ease-in-out;
z-index:100;
`
 



