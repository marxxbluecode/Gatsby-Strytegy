import React from "react";
import * as S from "./style";

export function Header({
    Blog,
    Faq,
    Enter,
    Lang,
    Image
}) {
    return (
        <S.ContainerHeader>
            <S.ImageLogo src={Image}/>
            <div></div>
            <div></div>
            <div>
                <S.BtnsInfo>{Blog}</S.BtnsInfo>
                <S.BtnsInfo>{Faq}</S.BtnsInfo>
                <S.BtnsInfo>{Enter}</S.BtnsInfo>
                <S.BtnsInfo>{Lang}</S.BtnsInfo>
            </div>
        </S.ContainerHeader>
    )
}