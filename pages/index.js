import DaysList from "../src/pages/DaysList";
import { getDaysList } from "../src/services/transport";
const Home = (props) => {
  return <DaysList {...props} />;
};

export async function getStaticProps(context) {
  const daysList = await getDaysList();
  return {
    props: { daysList }, // will be passed to the page component as props
  };
}

export default Home;
