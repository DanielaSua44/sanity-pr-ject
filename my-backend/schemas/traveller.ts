import { defineField, defineType } from "sanity";

export default defineType({
    name:'traveller',
    title:'Traveller',
    type:'reference',
    to: [{type:'persons'}]
})