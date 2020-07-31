import Day from "../../src/pages/Day";

export default function DayId(props) {
  return <Day date={props.date} />;
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
