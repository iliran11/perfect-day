import { useRouter } from "next/router";

const Day = (props) => {
  const router = useRouter();
  const { dayId } = router.query;
  return (
    <>
      <div>dayId: {dayId}</div>
      <div> build time: {props.date}</div>
      <div> Day: {props.day.activities[0]}</div>
    </>
  );
};

export default Day;
