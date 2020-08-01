import Link from "../components/Link";

const DaysList = (props) => {
  console.log(props.daysList);
  return (
    <div>
      {props.daysList.map((day) => {
        return (
          <div>
            <Link href="/day/[dayId]" as={`/day/${day._id}`}>
              day: {day._id}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default DaysList;
