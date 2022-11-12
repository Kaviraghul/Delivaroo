export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of the Dish",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortDescription",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(20),
    },
    {
      name: "price",
      type: "number",
      title: "Price of the dish in GBP",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Dish",
    },
  ],
  
}
