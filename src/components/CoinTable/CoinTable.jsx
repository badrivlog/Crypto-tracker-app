import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinData } from "../../services/fetchCoinData";

function CoinTable() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => fetchCoinData(page, "usd"),

    staleTime: 2 * 60 * 1000,
  });

  return (
    <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
      <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
        <p className="basis-[35%]">Coins</p>
        <p className="basis-[25%]">Current Price</p>
        <p className="basis-[20%]">24H Change</p>
        <p className="basis-[20%]">Market Cap</p>
      </div>
      <ul className="flex flex-col w-[80vw] mx-auto">
        {isLoading && <p>Loading...</p>}
        {data &&
          data.map((coin) => {
            return (
              <li
                key={coin.id}
                className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between"
              >
                <div className="flex items-center justify-start gap-3 basis-[35%]">
                  <div className="w-[5rem] h-[5rem]">
                    <img src={coin.image} className="w-full h-full" />
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <div className="text-3xl">{coin.name}</div>
                      <div className="text-xl">{coin.symbol}</div>
                    </div>
                  </div>
                </div>
                <div className="basis-[25%]">{coin.current_price}</div>
                <div className="basis-[20%]">{coin.price_change_24h}</div>
                <div className="basis-[20%]">{coin.market_cap}</div>
              </li>
            );
          })}
      </ul>
      <div className="flex gap-4 justify-center items-center">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-secondary btn-wide text-white text-2xl"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="btn btn-primary btn-wide text-white text-2xl"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CoinTable;
