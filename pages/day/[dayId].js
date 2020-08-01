import { getDayById } from "../../src/services/transport";
import Day from "../../src/pages/Day";

export default function DayId(props) {
  return <Day date={props.date} day={props.day} />;
}
export async function getServerSideProps(context) {
  console.log("zzzzzzzz", context.params.dayId);
  const day = await getDayById(context.params.dayId);
  return {
    props: { day: day }, // will be passed to the page component as props
  };
}
