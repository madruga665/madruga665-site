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
          Olá, me chamo <strong>Luciano Amâncio</strong>, tenho 34 anos e moro em Guarujá-SP.
          <br />
          Sou pai da <strong>Julia</strong> do <strong>Heitor</strong> e do <strong>Dante</strong>.
          <br />
          Sou Desenvolvedor Web Full Stack, formado pela <strong>Trybe</strong> e atualmente
          trabalho na <strong>Remessa Online</strong>
          <br />
          Criei esse site para mostrar um pouco de minhas habilidades e experiências .
        </p>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
