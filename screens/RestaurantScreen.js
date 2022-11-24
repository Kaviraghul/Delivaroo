import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useEffect, useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import DishesCard from "../components/DishesCard";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: {
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
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant(
        id,
        imgUrl,
        title,
        rating,
        gener,
        address,
        shortDescription,
        dishes,
      )
    );
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            className="w-full h-56 bg-gray-300 p-4"
            source={{ uri: urlFor(imgUrl).url() }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon color={"#00CCBB"} size={20} />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4 ">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row  space-x-2">
                <StarIcon size={22} color="green" opacity={0.5} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> . Offers
                </Text>
              </View>
              <View className="flex-row  space-x-1">
                <LocationMarkerIcon size={22} color="gray" opacity={0.4} />
                <Text className="text-xs text-gray-500">
                  Nearby . {address}
                </Text>
              </View>
            </View>
            <Text className="mt-2 pb-4 text-gray-500">{shortDescription}</Text>
          </View>
          <TouchableOpacity>
            <View className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
              <QuestionMarkCircleIcon color="gray" opacity={0.6} size={22} />
              <Text className="flex-1 pl-2 text-md font-bold">
                Have a food allergy?
              </Text>
              <ChevronRightIcon color="#00CCBB" />
            </View>
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="text-2xl font-bold pt-5 px-4 pb-3">Menu</Text>
          {dishes.map((dish) => (
            <DishesCard
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.shortDescription}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
