import Link from "next/link";

export default (props) => {
  return (
    <Link href={props.href} as={props.as}>
      <a>{props.children}</a>
    </Link>
  );
};
