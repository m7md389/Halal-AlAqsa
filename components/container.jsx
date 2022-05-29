import Container from "../styles/Container.module.css";

export default function Home(props) {
  const { title } = props;
  return (
    <div className={Container.container}>
      <h2>{title}</h2>
      <div>some data ...</div>
    </div>
  );
}
