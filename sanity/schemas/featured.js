export default {
    name: "featured",
    title: "Featured Menu categories",
    type: "document",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Featured category name",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "shortDescription",
            type: "string",
            title: "Short description",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "restaurant",
            type: "array",
            title: "Restaurant",
            of: [{type:"reference", to:[{type: "restaurant"}]}],
        }
    ]
}