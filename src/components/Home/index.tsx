import { useEffect, useState } from "react";
import { AboutContainer, ImageContainer, TextContainer } from "./styles";

function Home() {
  const [presentation, setPresentation] = useState('');

  const teste = async () => {
    const response = await fetch('http://localhost:3000/api/notion');
    const data = await response.json();

    setPresentation(data);
  }

  useEffect(() => {
    teste();
  },[])

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
        <p>{presentation}</p>
      </TextContainer>
    </AboutContainer>
  );
}

export default Home;
