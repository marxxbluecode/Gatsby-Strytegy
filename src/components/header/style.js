import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100vw;
    height: 4.6rem;
    background-color: #fff;
    opacity: 0.99;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    font-family: Soleto, sans-serif;
`

export const ImageLogo = styled.img`
    width: 130px;
`

export const BtnsInfo = styled.button`
    font-size: 1.2rem;
    background: transparent;
    border: 0;
    border-radius: .4rem;
    cursor: pointer;
    margin-right: 3rem;
    &:nth-child(3) {
        background: rgb(255, 235, 151);
        width: 150px;
        padding: .7rem 2rem .7rem 2rem;
      }&: hover{
          background-color: gold;
          transition: all 0.3s ease 0s;
          animation: 5s ease 0s 1 normal none running fdBcwW;
      }
    &:nth-child(4) {
        border: solid 1px #000;
        border-radius: 50%;
        font-size: 10px;
        width: 28px;
        height: 28px;
        margin-right: -1rem;
      }
`
