type TitleProps = {
  name: string;
  type?: "bold" | "normal";
};

const Title = ({ name, type = "normal" }: TitleProps) => {
  return <p style={{ fontWeight: type }}>Hello, {name}</p>;
};

export default Title;
