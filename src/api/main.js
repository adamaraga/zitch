import axios from "axios";

const apiURL = "https://app.orderfood.ng/api/v1";

export const fetchTopRes = () => {
  return axios.get(`${apiURL}/landing/top-rated`);
};

export const fetchCat = () => {
  return axios.get(`${apiURL}/landing/categories`);
};

export const fetchResByCat = (cat) => {
  return axios.get(
    `${apiURL}/landing/categories/get-stores-top-categories/all?limit=8&filter=1,38&store_type=${cat}`
  );
};
