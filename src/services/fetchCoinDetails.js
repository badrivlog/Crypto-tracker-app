import axiosIntances from "../helpers/axiosInstance";

export async function fetchCoinDetails(id) {
  try {
    const response = await axiosIntances.get(`/coins/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
