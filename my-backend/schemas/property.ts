import { defineField, defineType } from "sanity"

export default defineType({
    name: 'property',
    title: 'Property',
    type: 'document',
    fields: [
        defineField(
            {
            name:'name',
            title:'Name',
            type:'string'
        }),
        defineField({
            name:'location',
            title:'Location',
            type:'geopoint'

        }),
        defineField({
            name: 'propertyType',
            title: 'Property Type',
            options: {
                list: [
                    { title: 'House', value: 'house' },
                    {title:'Flat', value:'flat'},
                    {title:'Bed and Breakfast', value:'bed-and-breakfast'},
                    {title:'Boutique Hotel', value:'boutique-hotel'}
                ],
                layout:'radio'
            },
            type: "string"
        }),
        defineField({
            name:'mainImage',
            title:'Main Image',
            type:'image',
            options:{
                hotspot:true,
            }
        }),
        defineField({
            name:'images',
            title:'Images',
            type:'array',
            of:[{type:'propertyImage'}]
        }),
        defineField({
            name:'pricePerNight',
            title:'Price Per Night',
            type:'number'
        }),
        defineField({
            name:'beds',
            title:'Beds',
            type:'number'
        }),
        defineField({
            name:'bedrooms',
            title:'Bedrooms',
            type:'number'
        }),
        defineField({
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'title',
                maxLength:100
            }
        }),
        defineField({
            name:'id',
            title:'Id',
            type:'number'
        }),
        defineField({
            name:'description',
            title:'Description',
            type:'string'
        }),
        defineField({
            name:'host',
            title:'Host',
            type:'host'
        }),
        defineField({
            name:'reviews',
            title:'Reviews',
            type:'array',
            of: [{type:'review'}]
        })
    ]
})
