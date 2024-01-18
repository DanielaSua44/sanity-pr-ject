import { defineField, defineType } from "sanity";

export default defineType({
    name:'reviw',
    title:'Review',
    type:'object',
    fields: [
        defineField({
            name:'reviewDescription',
            title:'Review Description',
            type:'string'
        }),
        defineField({
            name:'traveller',
            title:'Traveller',
            type:'traveller'
        }),
        defineField({
            name:'rating',
            title:'Rating',
            options: {
                list: [
                    {title:'5-starts', value:'5-starts'},
                    {title:'4-starts', value:'4-starts'},
                    {title:'3-starts', value:'3-starts'},
                    {title:'2-starts', value:'2-starts'},
                    {title:'1-starts', value:'1-starts'}
                ],
                layout:'radio'
            },
            type:'string',
        })
    ]
})