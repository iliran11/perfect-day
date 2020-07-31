import { useRouter } from "next/router";

const Day = (props) => {
  const router = useRouter();
  const { dayId } = router.query;
  return (
    <>
      <div>day: {dayId}</div>
      <div> build time: {props.date}</div>
    </>
  );
};

export default Day;
