import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className='relative mr-2' >
        <Image className = 'w-20 h-20 rounded' source={{uri: urlFor(imgUrl).width(200).url()}} />
        <Text className = 'absolute bottom-1 left-1 text-white font-bold' >{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard