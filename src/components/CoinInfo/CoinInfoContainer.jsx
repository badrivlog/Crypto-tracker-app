import { useState } from "react";
import { getCoinHistoricData } from "../../services/getCoinHistoricData";
import Alert from "../Alert/Alert";
import currencyStore from "../../state/store";
import PageLoader from "../PageLoader/PageLoader";
import CoinInfo from "./CoinInfo";
import { useQuery } from "@tanstack/react-query";

function CoinInfoContainer({ coinId }) {
  const { currency } = currencyStore();

  const [days, setDays] = useState(1);
  const [coinIterval, setCoinInterval] = useState("daily");
  const {
    data: historicData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coinHistoricData", coinId, currency, days],
    queryFn: () => getCoinHistoricData(coinId, coinIterval, days, currency),
    staleTime: 2 * 60 * 1000,
  });

  if (isLoading) {
    return <PageLoader />;
  }

  if (isError) {
    return <Alert message="Error fetching the data" alertType="error" />;
  }

  return (
    <CoinInfo
      historicData={historicData}
      onDaysChange={setDays}
      onIntervalChange={setCoinInterval}
      days={days}
      currency={currency}
    />
  );
}

export default CoinInfoContainer;
