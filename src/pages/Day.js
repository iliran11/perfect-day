import { useRouter } from "next/router";

const Day = (props) => {
  console.log(props);
  const router = useRouter();
  const { dayId } = router.query;
  return (
    <div id="perfect-day">
      <div>dayId: {dayId}</div>
      {props.day.activities.map((entry) => (
        <div>{entry.text}</div>
      ))}
    </div>
  );
};

export default Day;
