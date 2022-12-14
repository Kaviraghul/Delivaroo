import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { selectBasketItems, totalBasketAmount } from "../features/basketSlice";
import { useSelector } from "react-redux";
import {
  formatCurrency,
  getSupportedCurrencies,
} from "react-native-format-currency";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const totalPrice = useSelector(totalBasketAmount);
  const navigation = useNavigation();
  const [totalPriceWithSymbol] = formatCurrency({
    amount: totalPrice,
    code: "INR",
  });
  
  if(items.length == 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={() => navigation.navigate("Basket")} className="flex-row bg-[#00CCBB] rounded-lg p-4 mx-4 space-x-1">
        <Text className=" text-white text-lg font-extrabold bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-center text-white text-lg font-extrabold">
          View Basket
        </Text>
        <Text className=" text-white text-lg font-extrabold">
          {totalPriceWithSymbol}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
