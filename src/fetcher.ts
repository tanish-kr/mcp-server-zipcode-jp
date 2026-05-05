const SEARCH_ENDPOINT = "https://zipcloud.ibsnet.co.jp/api/search";

const searchZipCode = async (zipCode: string) => {
    const response = await fetch(`${SEARCH_ENDPOINT}?zipcode=${zipCode}`);
    const data = await response.json();
    return data;
};

export { searchZipCode };
