import { Container, Title } from "./style";

interface INewsSoonProps {
  title: string;
}

const NewsSoon = ({ title }: INewsSoonProps) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default NewsSoon;
