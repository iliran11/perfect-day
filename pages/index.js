import Home from "../src/pages/Home";

const HomePage = (props) => {
  return <Home />;
};

// export async function getStaticProps(context) {
//   const daysList = await getDaysList();
//   return {
//     props: { daysList }, // will be passed to the page component as props
//   };
// }

export default HomePage;
