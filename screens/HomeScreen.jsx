import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import HeroImage from "../assets/hero.png";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <StatusBar />

      {/* First Section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00bcc9] text-3xl font-semibold">Go</Text>
        </View>

        <Text className="text-[#2a2b4b] text-3xl font-semibold">Travel</Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-8 space-y-2">
        <Text className="text-[#3c6072] text-[38px]">Enjoy the trip with</Text>
        <Text className="text-[#00bcc9] text-[36px] font-extrabold">
          Good Moments
        </Text>
        <Text className="text-[#3c6072] text-base">
          Your travel companion, plan your trip, book your stay, and discover
          new places with ease
        </Text>
      </View>

      {/* Third Section */}
      <View className="w-[380px] h-[380px] bg-[#00bcc9] rounded-full absolute -right-52 bottom-[80px]"></View>
      <View className="w-[380px] h-[380px] bg-[#e99265] rounded-full absolute -left-[160px] -bottom-[100px]"></View>

      {/* Image Container */}
      <View className="flex-1 relative items-center justify-end">
        <Animatable.Image
          animation="fadeIn"
          easeing="ease-in-out"
          source={HeroImage}
          className="w-full h-[450px]"
        />
      </View>

      {/* Go Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Discover")}
        className="flex-0 items-center justify-center"
      >
        <View className="absolute bottom-20 w-[85px] h-[85px] border-l-2 border-r-2 border-t-4 rounded-full border-[#00bcc9] items-center justify-center">
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-[75px] h-[75px] items-center justify-center bg-[#00bcc9] rounded-full"
          >
            <Text className="text-white font-bold text-3xl">Go</Text>
          </Animatable.View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
