import { Container, Title } from "./style";

interface INewsSoonProps {
  title: string;
  id?: string;
}

const NewsSoon = ({ title, id }: INewsSoonProps) => {
  return (
    <Container id={id}>
      <Title>{title}</Title>
    </Container>
  );
};

export default NewsSoon;
