import { AboutContainer, ImageContainer, TextContainer } from "./styles";

const About = () => {
  return (
    <AboutContainer>
      <ImageContainer>
        <img
          className='about-image'
          src='/assets/madruga-image-about.jpg'
          alt='Luciano Amancio'
          width={300}
          height={400}
        />
      </ImageContainer>
      <TextContainer>
        <p>
          Olá, me chamo Luciano Amâncio, tenho 34 anos e moro em Guarujá-SP. Sou pai da Julia do
          Heitor e do Dante. Sou Desenvolvedor Web Full Stack, formado pela Trybe e atualmente
          trabalho na Remessa Online Criei esse site para mostrar um pouco de minhas habilidades e
          experiências.
        </p>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
