import React from "react";
import * as S from "./style";

export function Footer({
    AboutUs,
    AboutParagraph,
    FooterLogo,
    Copyright,
    Cep,
    CNPJ,
    Social,
    Insta,
    Face,
    Link,
    Blog,
    Help,
    FAQ,
    Term,
    Privacy,
    Support
}) {
    return (
        <S.ContainerFooter>
           <S.WrapperRight>
            <S.Footertitle>{AboutUs}</S.Footertitle>
            <S.Paragraph>{AboutParagraph}</S.Paragraph>
            <S.LogoCopy>
                <S.img src={FooterLogo}/>
                <S.Paragraph>{Copyright}</S.Paragraph>
            </S.LogoCopy>
            <S.Cep>{Cep}</S.Cep>
            <S.Cep>{CNPJ}</S.Cep>
           </S.WrapperRight>

           <S.WrapperLeft>
               <S.Social>
                    <S.Footertitle>{Social}</S.Footertitle>
                    <S.ParagraphLi>{Insta}</S.ParagraphLi>
                    <S.ParagraphLi>{Face}</S.ParagraphLi>
                    <S.ParagraphLi>{Link}</S.ParagraphLi>
                    <S.ParagraphLi>{Blog}</S.ParagraphLi>
               </S.Social>
               <S.Help>
                    <S.Footertitle>{Help}</S.Footertitle>
                    <S.ParagraphLi>{FAQ}</S.ParagraphLi>
                    <S.ParagraphLi>{Term}</S.ParagraphLi>
                    <S.ParagraphLi>{Privacy}</S.ParagraphLi>
                    <S.ParagraphLi>{Support}</S.ParagraphLi>
               </S.Help>
           </S.WrapperLeft>
        </S.ContainerFooter>
    )
}