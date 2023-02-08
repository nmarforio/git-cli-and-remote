export default function Link({ href, children, showClass = true }) {
  return (
    <a className={showClass ? "navigation__link" : ""} href={href}>
      {children}
    </a>
  );
}
