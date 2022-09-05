import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();

    const button = () => {
        history.push("/");
    }
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp onClick={button}>GET ALL THERE</SignUp>
                <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/22, the price of Disney+ and The Disney Bundle will increase by $1.</Description>
                <Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" />
                </Description>
            </CTA>


        </Container >
    )
}

export default Login;

const Container = styled.div`
 position:realtive;
 height:calc(100vh-17px);
 display:flex;
 align-items: center;
 justify-content: center;
 margin-left: 10px;

 &:before{
    bakground-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    content: "";
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    opacity:0.7;
    z-index:-1;

 }
 `

const CTA = styled.div`
 max-width: 750px;
 padding: 80px 40px;
 width: 90%;
 margin-top:100px;
 display:flex;
 flex-direction: column;
 align-items:center;
 `

const CTALogoOne = styled.img``

const SignUp = styled.a`
width: 100%;
background-color: #0063e5;
font-weight:bold;
padding: 15px 0;
color: #f9f9f9;
border-radius: 4px;
text-align: center;
font-size: 18px;
cursor:pointer;
transition: all 250ms;
margin-top:8px;
margin-bottom: 12px;


&:hover{
    background: #0483ee;
    letter-spacing: 1.3px;
}
`
const Description = styled.p`
font-size: 12px;
letter-spacing: 1.5px;
text-align: center;
line-height:1.5;
`

const CTALogoTwo = styled.img`
width:90%;
`