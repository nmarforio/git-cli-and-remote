import "./styles.css";

export default function App() {
  return <Greeting name="Nicole" />;
}

function Greeting({ name }) {
  const coaches = ["Jan", "Martin"];
  return <h1>Hello, {coaches.includes(name) ? " Coach!" : name}</h1>;
}
