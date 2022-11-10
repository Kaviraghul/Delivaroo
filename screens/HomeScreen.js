import { View, Text, SafeAreaView, Image, TextInput, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {  AdjustmentsIcon, ChevronDownIcon, SearchIcon, SparklesIcon, UserIcon } from "react-native-heroicons/solid";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

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
                        <Text className = 'font-bold text-xl flex-row items-center'>Current Location<ChevronDownIcon className='bg-red-400 pt-5' size={20}  color= "#00CCBB"/></Text>
                    </View>
                    <UserIcon size={35} color="#00CCBB"/>
                </View>

                {/* search */}

                <View className='flex-row items-center space-x-2 pb-2 mx-4 '>
                    <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
                     <SearchIcon color= "#00CCBB"/>
                     <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
                    </View>
                    <AdjustmentsIcon color= "#00CCBB" />
                </View>

                <ScrollView className="bg-gray-100" contentContainerStyle={{
                    paddingBottom: 100,
                }} >
                    <Categories />
                    <FeaturedRow 
                        id = {1}
                        title = "Some title"
                        description = "description about the title"
                        categoryName = "Category 1"
                    />
                    <FeaturedRow 
                        id = {2}
                        title = "Some title"
                        description = "description about the title"
                        categoryName = "Category 1"
                    />
                    <FeaturedRow 
                        id = {3}
                        title = "Some title"
                        description = "description about the title"
                        categoryName = "Category 1"
                    />
                </ScrollView>
    </SafeAreaView>
  )
}