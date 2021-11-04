const host = "https://back-end-bsale.herokuapp.com";

export const fetchData = async (endpoint) => {
    const result = await fetch(`${host}${endpoint}`);
    const data = await result.json();
    return data;
}