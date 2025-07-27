import { useParams } from "react-router-dom";

function CoinDetailsPage() {
  const { coinId } = useParams();
  return <div>Coin Details Page {coinId}</div>;
}

export default CoinDetailsPage;
