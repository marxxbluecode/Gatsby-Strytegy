import React from "react";
import { graphql } from "gatsby";
import { Header } from "../components/header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export const query = graphql`
  query{
    alldata{
      projects {
        imageLogo {
          url
        }
        buttonblog
        buttonfaq
        buttonenter
        buttonlang
        titlebody
        subtitlebody
        buttonstart
        imageHe {
          url
        }
        titlebody2
        subtitlebody2
        imageGif {
          url
        }
        titleGif
        subtitleGif
        image3 {
          url
        }
        title3
        subtitle3
        title4
        subtitle4
        title5
        image5 {
          url
        }
        paragraph1
        paragraph2
        paragraph3
        title6
        subtitle6
        profilepic {
          url
        }
        profilename
        profiledescription
        title7
        subtitle7
        buttonstart2
        aboutUs
        aboutusparagraph
        footerLogo {
          url
        }
        copyright
        cep
        cnpj
        social
        insta
        face
        link
        blog
        help
        faq
        term
        privacy
        support
      }
    }   
  }
`

export default function index({data}) {

  const mydata = data.alldata.projects[0]

  return(
    <div>
      {console.log("into the thick of it", data)}
      <Header 
        Image={mydata.imageLogo.url}
        Blog={mydata.buttonblog}
        Faq={mydata.buttonfaq}
        Enter={mydata.buttonenter}
        Lang={mydata.buttonlang}
      />
      <Main
        Title={mydata.titlebody}
        Subtitle={mydata.subtitlebody}
        Button={mydata.buttonstart}
        Image={mydata.imageHe.url}
        Title2={mydata.titlebody2}
        Subtitle2={mydata.subtitlebody2}
        Gif={mydata.imageGif.url}
        Titlegif={mydata.titleGif}
        Subtitlegif={mydata.subtitleGif}
        Image3={mydata.image3.url}
        Title3={mydata.title3}
        Subtitle3={mydata.subtitle3}
        Title4={mydata.title4}
        Subtitle4={mydata.subtitle4}
        Title5={mydata.title5}
        Image5={mydata.image5.url}
        Paragraph1={mydata.paragraph1}
        Paragraph2={mydata.paragraph2}
        Paragraph3={mydata.paragraph3}
        Title6={mydata.title6}
        Subtitle6={mydata.subtitle6}
        Profilepic={mydata.profilepic.url}
        Profilename={mydata.profilename}
        Profiledescription={mydata.profiledescription}
        Title7={mydata.title7}
        Subtitle7={mydata.subtitle7}
        Buttonstart2={mydata.buttonstart2}
      />
      <Footer
        AboutUs={mydata.aboutUs}
        AboutParagraph={mydata.aboutusparagraph}
        FooterLogo={mydata.footerLogo.url}
        Copyright={mydata.copyright}
        Cep={mydata.cep}
        CNPJ={mydata.cnpj}
        Social={mydata.social}
        Insta={mydata.insta}
        Face={mydata.face}
        Link={mydata.link}
        Blog={mydata.blog}
        Help={mydata.help}
        FAQ={mydata.faq}
        Term={mydata.term}
        Privacy={mydata.privacy}
        Support={mydata.support}
      />
    </div>
  )
}