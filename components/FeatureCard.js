import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LocationMarkerIcon, StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const FeatureCard = ({
  id,
  imgUrl,
  title,
  rating,
  gener,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          gener,
          address,
          shortDescription,
          dishes,
          long,
          lat,
        });
      }}
    >
      <Image
        className="w-64 h-36 rounded-sm"
        source={{ uri: urlFor(imgUrl).url() }}
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {gener}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeatureCard;
