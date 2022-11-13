import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { ArrowRightIcon, ChevronRightIcon } from "react-native-heroicons/solid";
import FeatureCard from "./FeatureCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description, categoryName }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured" && _id == $id]{
          ...,
          restaurant[] ->{
            ...,
            dishes[]->,
            type->{
              name
            }
          }
      }[0]
      `,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurant))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <View>
      <View className=" mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants.map((restaurant) => (
          <FeatureCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            gener={restaurant.type?.name}
            address={restaurant.address}
            shortDescription={restaurant.shortDescription}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
