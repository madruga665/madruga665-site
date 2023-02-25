import Link from "next/link";
import { Container, CustomWave } from "./style";
import Brand from "../../components/Brand";
import { Colors } from "../../styles/variables";

function IntroductionPage() {
  return (
    <Container>
      <div>
        <Brand withLogo />
        <span>Desenvolvedor Web Fullstack</span>
      </div>
      <Link href='/portifolio'>ir para portifolio</Link>

      <CustomWave
        fill={Colors.nephritis}
        paused={false}
        options={{
          height: 60,
          amplitude: 80,
          speed: 0.15,
          points: 6,
        }}
      />

      <CustomWave
        fill={Colors.emerald}
        paused={false}
        options={{
          height: 80,
          amplitude: 60,
          speed: 0.15,
          points: 6,
        }}
      />
    </Container>
  );
}

export default IntroductionPage;
