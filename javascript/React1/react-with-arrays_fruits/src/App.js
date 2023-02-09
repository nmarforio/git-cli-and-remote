import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "Banana",
      color: "yellow",
    },
    {
      id: 202,
      name: "Watermelon",
      color: "red",
    },
    {
      id: 156,
      name: "Kiwi",
      color: "green",
    },
    {
      id: 2674,
      name: "Orange",
      color: "orange",
    },
    {
      id: 3674,
      name: "Raspberry",
      color: "pink",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} />
      ))}
    </div>
  );
}
