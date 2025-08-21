import axiosIntances from "../helpers/axiosInstance";

export async function getCoinHistoricData(
  id,
  interval,
  days = 7,
  currency = "usd"
) {
  const perPage = 10;
  try {
    const response = await axiosIntances.get(
      `/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&vs_interval=${interval}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
