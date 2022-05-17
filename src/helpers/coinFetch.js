export const getCoins = async () => {

    const resp = await fetch('https://api.coincap.io/v2/assets?api-key=d05c7232-8d8c-44e6-884a-70c9451f4d96&limit=10')
    const { data } = await resp.json()
    return data

};

export const getCoinId = async (id) => {
    const resp = await fetch(`https://api.coincap.io/v2/assets/${id}`);
    const { data } = await resp.json();
    return data;
};