import { Container } from "./Summary.styles";

interface SummaryProps {
  title: string;
  img: string;
  alt: string;
  value: string;
}

export function Summary({ title, img, alt, value }: SummaryProps) {
  return (
    <Container>
      <div>
        <header>
          <p>{title}</p>
          <img src={img} alt={alt} />
        </header>
        <strong>{value}</strong>
      </div>
    </Container>
  );
}
