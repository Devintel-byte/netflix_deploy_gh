import React from "react";
import { HeaderContainer } from '../containers/header';
import { Feature, OptForm  } from "../components";
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';


export default function Home() {
    return (
        <>
        <HeaderContainer>
            <Feature>
                <Feature.Frame>
                  <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                  <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
                </Feature.Frame>
            <OptForm>
                <OptForm.Text>
                    Ready to watch? Enter your email to create or restart your membership.
                </OptForm.Text>
                  <OptForm.Break />
                <OptForm.Input type= "text"  placeholder= "Email address" />
                <OptForm.Button>Get Started</OptForm.Button>
            </OptForm>
            </Feature>
        </HeaderContainer>
         <JumbotronContainer />
         <FaqsContainer />
         <FooterContainer />
        </>
    )
}