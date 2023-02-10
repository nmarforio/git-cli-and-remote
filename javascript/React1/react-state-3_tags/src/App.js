import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handelDeleteTag(tagremoved) {
    setTags(tags.filter((tag) => tag !== tagremoved));
  }

  function handelonAddTag(newTag) {
    setTags([...tags, newTag]);
  }
  // setNumbers(numbers.filter((number) => number !== numberToRemove));

  return (
    <main className="app">
      <Form onAddTag={handelonAddTag} />
      <List onDeleteTag={handelDeleteTag} tags={tags} />
    </main>
  );
}
