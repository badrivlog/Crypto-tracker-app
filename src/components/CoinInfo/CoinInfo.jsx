import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { chartDays } from "../../helpers/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CoinInfo({
  historicData,
  onDaysChange,
  onIntervalChange,
  days,
  currency,
}) {
  if (!historicData) {
    return <p>Data not found!</p>;
  }

  const handleDaysChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex].value;
    if (selectedOption == 1) {
      onIntervalChange("");
    } else {
      onIntervalChange("daily");
    }
    onDaysChange(selectedOption);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6 w-full md:h-3/4">
      <div className="h-[600px] w-full">
        <Line
          data={{
            labels: historicData.prices.map((coinPrice) => {
              let date = new Date(coinPrice[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;

              return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                label: `Price (Past ${days} ${
                  days === 1 ? "day" : "days"
                }) in ${currency.toUpperCase()}`,
                data: historicData.prices.map((coinPrice) => coinPrice[1]),
                backgroundColor: "#339af0",
                borderColor: "#339af0",
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            elements: { point: { radius: 0 } },
          }}
        />
      </div>
      <div className="flex justify-center mt-5 w-full">
        <select
          onChange={handleDaysChange}
          defaultValue="Pick a Framework"
          className="select select-info"
        >
          {chartDays.map((chartDay, index) => (
            <option
              selected={days == chartDay.value}
              key={index}
              value={chartDay.value}
            >
              {chartDay.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CoinInfo;
