import Banner from "../components/Banner/Banner";
import CoinTable from "../components/CoinTable/CoinTable";
import Navbar from "../components/Navbar/Navbar";

function Home({ currency, setCurrency }) {
  return (
    <>
      <Navbar setCurrency={setCurrency} />
      <Banner />
      <CoinTable currency={currency} />
    </>
  );
}

export default Home;
