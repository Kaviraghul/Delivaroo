import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useSelector, useDispatch } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";
import {
  formatCurrency,
  getSupportedCurrencies,
} from "react-native-format-currency";

const DishesCard = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const list = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemtoBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!list.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  const [priceWithSymbol] = formatCurrency({
    amount: price,
    code: "INR",
  });

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={` bg-white p-4 border border-gray-200 ${
          isPressed && "border-b-0"
        } `}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">{priceWithSymbol}</Text>
          </View>
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
            source={{ uri: urlFor(image).url() }}
            className="w-20 h-20 bg-gray-300 p-4"
          />
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={!list.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                size={40}
                color={list.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
            <Text>{list.length}</Text>
            <TouchableOpacity onPress={addItemtoBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishesCard;
