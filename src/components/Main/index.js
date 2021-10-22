import React from "react";
import * as S from "./style";

export function Main({
    Title,
    Subtitle,
    Button,
    Image,
    Title2,
    Subtitle2,
    Gif,
    Titlegif,
    Subtitlegif,
    Image3,
    Title3,
    Subtitle3,
    Title4,
    Subtitle4,
    Title5,
    Image5,
    Paragraph1,
    Paragraph2,
    Paragraph3,
    Title6,
    Subtitle6,
    Profilepic,
    Profilename,
    Profiledescription,
    Title7,
    Subtitle7,
    Buttonstart2

}) {
    return (
        <S.Main>
            <S.Container>
                <S.Wrapper>
                    <S.Title>{Title}</S.Title>
                    <S.Paragraph>{Subtitle}</S.Paragraph>
                    <S.BtnStart>{Button}</S.BtnStart>
                </S.Wrapper>

                
                <img style={{ width: "60%"}} src={Image} alt="figure header"/>
            </S.Container>

            <S.BottomWrapper>
                <S.BottomTitle>{Title2}</S.BottomTitle>
                <S.BottomParagraph>{Subtitle2}</S.BottomParagraph>
            </S.BottomWrapper>

            <S.BoxGif>
                
                    <S.ImageMain src={Gif}/>
                
                <S.infogif>
                    <S.TitleGif>{Titlegif}</S.TitleGif>
                    <S.ParagraphGif>{Subtitlegif}</S.ParagraphGif>
                </S.infogif>
            </S.BoxGif>

            <S.BoxImgMain>
                
                    <S.ImageMain src={Image3}/>
               
                <S.InfoMain>
                    <S.TitleImgMain>{Title3}</S.TitleImgMain>
                    <S.ParagraphImgMain>{Subtitle3}</S.ParagraphImgMain>
                </S.InfoMain>
            </S.BoxImgMain>

            <S.BoxMain>
                <S.WrapperMain>
                    <S.TitleMain>{Title4}</S.TitleMain>
                    <S.ParagraphMain>{Subtitle4}</S.ParagraphMain>
                </S.WrapperMain>
            </S.BoxMain>

            <S.BoxLaw>
                <S.Title>{Title5}</S.Title>
                
                    <S.Imagedata src={Image5}/>
                
                <S.ParagraphImgMain>{Paragraph1}</S.ParagraphImgMain>
                <S.ParagraphImgMain>{Paragraph2}</S.ParagraphImgMain>
                <S.ParagraphImgMain>{Paragraph3}</S.ParagraphImgMain>
            </S.BoxLaw>
            <S.BoxUsers>
                <S.TitleMain>{Title6}</S.TitleMain>
                <S.ParagraphUser>{Subtitle6}</S.ParagraphUser>
                <S.WrapperUsers>
                    <S.Profile>
                        <figure>
                            <S.ImageProfile src={Profilepic}/>
                        </figure>
                        <S.ProfileInfo>
                            <S.TitleProfile>{Profilename}</S.TitleProfile>
                            <S.ParagraphProfile>{Profiledescription}</S.ParagraphProfile>
                        </S.ProfileInfo>
                    </S.Profile>
                </S.WrapperUsers>
            </S.BoxUsers>
            <S.BoxColaborate>
                <S.Title>{Title7}</S.Title>
                <S.ParagraphColab>{Subtitle7}</S.ParagraphColab>
                <S.BtnStart>{Buttonstart2}</S.BtnStart>
            </S.BoxColaborate>
        </S.Main>
    )
}