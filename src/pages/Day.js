import { useRouter } from "next/router";

const Day = () => {
  const router = useRouter();
  const { dayId } = router.query;
  return <div>day: {dayId}</div>;
};

export default Day;
