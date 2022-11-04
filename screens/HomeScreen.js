import { View, Text, SafeAreaView, Image} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {  ChevronDownIcon, SparklesIcon, UserIcon } from "react-native-heroicons/solid";

export default function HomeScreen() {
  
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown : false,
        })
    },[]);

  return (
    <SafeAreaView  className='bg-white  pt-10'>
                <View className=' flex-row pb-3 items-center mx-4 space-x-2'>
                    <Image source={{uri: 'https://links.papareact.com/wru'}}
                    className = 'h-7 w-7 bg-gray-300 p-4 rounded-full'
                    />
                    <View className='flex-1'>
                        <Text className = ' font-bold text-gray-400 text-xs'>Deliver now!</Text>
                        <Text className = 'font-bold flex-row align-middle text-xl'>Current Location 
                        <ChevronDownIcon size={24} color= "#00CCBB"/>
                    </Text>
                    </View>
                    <UserIcon size={35} color="#00CCBB"/>
                </View>
    </SafeAreaView>
  )
}