import Image from "./Image";
import Link from "./Link";
import logo from "../img/logo.jpg";

export default function Logo() {
  return (
    <Link showClass={false} href={"#"}>
      <Image src={logo} alt={"logo"} />
    </Link>
  );
}
