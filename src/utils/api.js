import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params ={
    key: "AIzaSyDhSUXbYYMkevODD5-41oj1YUUHsNiJfIM",
    cx: "800d7d141cd9c4ea1",
}

export const fetchDataFromApi = async (load) => {

    const {data} = await axios.get(BASE_URL,{
        params:{...params,...load}
    })
return data
};
