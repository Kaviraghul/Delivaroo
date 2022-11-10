import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon, ChevronRightIcon } from 'react-native-heroicons/solid'
import FeatureCard from './FeatureCard'

const FeaturedRow = ({id, title, description, categoryName}) => {
  return (
    <View >
        <View className=' mt-4 flex-row items-center justify-between px-4' >
            <Text className = 'font-bold text-lg' >{title}</Text>
            <ArrowRightIcon color="#00CCBB" />
        </View>
        <Text className='text-xs text-gray-500 px-4'>{description}</Text>
        <ScrollView horizontal contentContainerStyle={{
          paddingHorizontal:15,
        }} showsHorizontalScrollIndicator = {false} className='pt-4' >
            <FeatureCard 
                id = {123} 
                imgUrl="https://media.istockphoto.com/id/931308812/photo/selection-of-american-food.jpg?s=612x612&w=0&k=20&c=7-2Glc2qVkrWdLaqXwLnNoJLUvc2vMz_QpDTKDcmYiY=" 
                title = "title" 
                rating = {4.3} 
                gener = "gener type" 
                address = "4/3A1 Kavi illam" 
                shortDescription = "some short description of the food" 
                dishes = {[]} 
                long = {20} 
                lat = {0} />
                <FeatureCard 
                id = {123} 
                imgUrl="https://media.istockphoto.com/id/931308812/photo/selection-of-american-food.jpg?s=612x612&w=0&k=20&c=7-2Glc2qVkrWdLaqXwLnNoJLUvc2vMz_QpDTKDcmYiY=" 
                title = "title" 
                rating = {4.3} 
                gener = "gener type" 
                address = "4/3A1 Kavi illam" 
                shortDescription = "some short description of the food" 
                dishes = {[]} 
                long = {20} 
                lat = {0} />
                <FeatureCard 
                id = {123} 
                imgUrl="https://media.istockphoto.com/id/931308812/photo/selection-of-american-food.jpg?s=612x612&w=0&k=20&c=7-2Glc2qVkrWdLaqXwLnNoJLUvc2vMz_QpDTKDcmYiY=" 
                title = "title" 
                rating = {4.3} 
                gener = "gener type" 
                address = "4/3A1 Kavi illam" 
                shortDescription = "some short description of the food" 
                dishes = {[]} 
                long = {20} 
                lat = {0} />
                <FeatureCard 
                id = {123} 
                imgUrl="https://media.istockphoto.com/id/931308812/photo/selection-of-american-food.jpg?s=612x612&w=0&k=20&c=7-2Glc2qVkrWdLaqXwLnNoJLUvc2vMz_QpDTKDcmYiY=" 
                title = "title" 
                rating = {4.3} 
                gener = "gener type" 
                address = "4/3A1 Kavi illam" 
                shortDescription = "some short description of the food" 
                dishes = {[]} 
                long = {20} 
                lat = {0} />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow