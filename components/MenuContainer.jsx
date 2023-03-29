import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const MenuContiner = ({ name, image, type, setType }) => {
  return (
    <>
      <TouchableOpacity 
      onPress={()=>{
        return(
          setType(name.toLowerCase())
        )
      }}
      className="items-center">
        <View
          className={`rounded-full w-[70px] h-[70px] items-center justify-center ${
            type === name.toLowerCase() ? "bg-gray-300" : "bg-gray-100"
          }`}
        >
          <Image source={image} className="w-[40px] h-[40px]" />
        </View>
        <Text className="font-medium text-[#00bcc9]">{name}</Text>
      </TouchableOpacity>
    </>
  );
};

export default MenuContiner;
