import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from '../sanity'
import { useState , useEffect} from 'react'
import category from '../sanity/schemas/category'

const Categories = () => {
  const [featuredCategories, setFeaturedCategories] =  useState([]);
  useEffect(() => {

    sanityClient.fetch(
    `
    *[_type == "category"]
    `).then(data => {
        setFeaturedCategories(data)
    })
}, [])

   

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={
        {
            paddingHorizontal:15,
            paddingTop:10
        }
    } >
        

        {featuredCategories.map((category) => <CategoryCard key={category._id}  imgUrl = {category.image} title = {category.name}/>)}
        
          
    

    </ScrollView>
  )
}

export default Categories