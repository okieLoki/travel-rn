import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AutoCompleteInput from "react-native-tomtom-autocomplete";
import MenuContainer from "../components/MenuContainer";
import Hotel from "../assets/hotel.png";
import Restaurants from "../assets/restaurants.png";
import Travel from "../assets/travel.png";
import NotFound from "../assets/notFound.jpg";
import ItemCardContainer from "../components/ItemCardContainer";
import { getPlacesData } from "../api/index";

const Discover = () => {
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setmainData] = useState([]);
  
  const [bl_lat, setBl_lat] = useState(null)
  const [bl_lon, setBl_lon] = useState(null)
  const [tr_lat, setTr_lat] = useState(null)
  const [tr_lon, setTr_lon] = useState(null)
  

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(
      bl_lat,
      tr_lat,
      bl_lon,
      tr_lon,
      type
    ).then((data) => {
      setmainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [bl_lat, tr_lat, bl_lon, tr_lon, type]);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="px-6 pt-3">
        <Text className="text-[35px] text-[#0b646b] font-extrabold">
          Discover
        </Text>
        <Text className="text-[28px] text-[#527283]">the beauty today</Text>
      </View>

      <AutoCompleteInput
        inputProps={{
          placeholder: "Search",
        }}
        onPress={(item) => {
         setBl_lat(item.boundingBox.btmRightPoint.lat)
         setTr_lat(item.boundingBox.topLeftPoint.lat)
         setBl_lon(item.boundingBox.topLeftPoint.lon)
         setTr_lon(item.boundingBox.btmRightPoint.lon)
        }}
        inputContainerStyle={{
          padding: 10,
          margin: 20,
          width: Dimensions.get("window").width / 1.1125,
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 15,
          backgroundColor: "white",

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}
        listItemsContainerStyle={{
          padding: 5,
          marginHorizontal: 10,
          width: Dimensions.get("window").width / 1.1125,
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 15,
          alignSelf: "center",
          backgroundColor: "white",

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}
        bottomDivider
        tomtomOptions={{ key: "fboDuAyucemrLAbRCd5Wb6La1yu4YIoG" }}
      />

      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0b646b" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row px-8 mt-3 items-center justify-between">
            <MenuContainer
              key={"hotels"}
              name="Hotels"
              image={Hotel}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              name="Restaurants"
              image={Restaurants}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              name="Attractions"
              image={Travel}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View className="mt-8 px-6 flex-row justify-between items-baseline">
              <Text className="text-[#0b646b] font-extrabold text-2xl">
                Top Picks
              </Text>
              <TouchableOpacity>
                <Text className="text-[#a0c4c7]">Explore →</Text>
              </TouchableOpacity>
            </View>

            <View className="px-4 mt-6 flex-row items-center justify-evenly flex-wrap"
            >
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => {
                    return (
              <View className='mb-2' key={i}>
                      <ItemCardContainer
                        image={
                          data?.photo?.images?.medium?.url
                            ? data?.photo?.images?.medium?.url
                            : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                        }
                        title={data?.name}
                        location={data?.location_string}
                        data={data}
                      />
                      </View>
                    );
                  })}
                </>
              ) : (
                <>
                  <View className="items-center mt-[200px] justify-between">
                    <Image className="h-[160px] w-[160px]" source={NotFound} />
                    <Text className="text-[#0b646b] font-semibold">
                      No data found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;

