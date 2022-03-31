import React from "react";
import { Container, Frame, Title, SubTitle } from "./styles/feature";

export default function Feature({ children, ...restProps}) {
    return <Container {...restProps}> {children} </Container>;
} 

Feature.Frame = function FeatureFrame({ children, ...restProps}) {
    return <Frame {...restProps}> {children} </Frame>;
} 

Feature.Title = function FeatureTitle({ children, ...restProps}) {
    return <Title {...restProps}> {children} </Title>;
} 

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps}) {
    return <SubTitle {...restProps}> {children} </SubTitle>;
} 
