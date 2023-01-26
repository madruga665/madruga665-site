import { AboutContainer, ImageContainer, TextContainer } from "./styles";

const About = () => {
  function calculateAge() {
    const yearOfBirth = 1986;
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const dezemberMonth = 11;

    if (currentMonth < dezemberMonth) {
      return (currentYear - yearOfBirth - 1).toString();
    }

    return (currentYear - yearOfBirth).toString();
  }

  const age = calculateAge();

  const aboutText = `Olá, me chamo Luciano Amâncio, tenho ${age}  anos e moro em Guarujá-SP. Sou pai da Julia do
  Heitor e do Dante. Sou Desenvolvedor Web Full Stack, formado pela Trybe e atualmente
  trabalho na Remessa Online. Criei esse site para mostrar um pouco de minhas habilidades e
  experiências.`;

  return (
    <AboutContainer id='sobre'>
      <ImageContainer>
        <img
          className='about-image'
          src='https://github.com/madruga665.png'
          alt='Luciano Amancio'
        />
      </ImageContainer>
      <TextContainer>
        <p>{aboutText}</p>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
