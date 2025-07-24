import axiosIntances from "../helpers/axiosInstance";

export async function fetchCoinData() {
  try {
    const response = await axiosIntances.get("/coins/markets?vs_currency=usd");
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
