import { defineType, defineField } from 'sanity';

export default defineType({
    name:'person',
    title:'Person',
    type:'document',
    fields:[
        defineField({
            name:'name',
            title:'Name',
            type:'string',
            description:'Please use "Firstname Lastname" format'
        }),
        defineField({
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'name',
                maxLength:100
            }
        }),
        defineField({
            name:'id',
            title:'Id',
            type:'number'
        }),
        defineField({
            name:'image',
            title:'Image',
            type:'image'
        })
    ]
})