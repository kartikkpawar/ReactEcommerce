const BASE_URL =
  "https://my-json-server.typicode.com/kartikkpawar/ReactEcommerce/products";

export const getAllProductssAPI = () => {
  return fetch(BASE_URL, { method: "GET" }).then((response) => response.json());
};
// creating new Product
export const createProductAPI = (body) => {
  return fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};
// updating Product
export const updateProductAPI = (body, id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

// deleting Product
export const deleteProductAPI = (id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
