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

      <img src={`/images/perfect-day-${dayId}.png`} />
      <style jsx>{`
        img {
          border: 1px solid red;
        }
      `}</style>
    </div>
  );
};

export default Day;
