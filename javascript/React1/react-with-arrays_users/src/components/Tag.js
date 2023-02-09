import "./Tag.css";

const buildClassName = (tag) => {
  let className = "tag";
  if (tag === "admin") {
    className += " tag--highlight";
  }
  return className;
};

export default function Tag({ tag }) {
  const className = buildClassName(tag);
  return <li className={className}>{tag}</li>;
}
