import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const ItemCardContainer = ({ image, title, location }) => {
  return (
    <>
      {title ? (
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 4,
          }}
        >
          <TouchableOpacity className="rounded-md space-y-2 px-4 py-2">
            <Image
              source={{ uri: image }}
              className="mt-1 w-[120px] h-[120px] object-cover rounded-md"
            />
            <Text className="text-[15px] font-bold text-[#428288]">
              {title?.length > 15 ? `${title.slice(0, 15)}..` : title}
            </Text>
            <Text className="flex-row space-x-2 items-center text-md font-bold">
              <FontAwesome name="map-marker" size={18} color="#428288" />
              {" " + location?.length > 15
                ? `${location.slice(0, 15)}..`
                : location}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ItemCardContainer;
