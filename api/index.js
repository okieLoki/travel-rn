import axios from "axios";

export const getPlacesData = async (bl_lat, tr_lat, bl_long, tr_long) => {
  try {
    const {data : {data}} = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat,
          tr_latitude: tr_lat,
          bl_longitude: bl_long,
          tr_longitude: tr_long,
          limit: "30",
          currency: "INR",
          open_now: "false",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "d930b05302mshfb457c1b4501b21p13ac32jsnfa692fb15cbc",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    )
    return data;
  } catch (error) {
    console.warn(error);
    return null;
  }
};

