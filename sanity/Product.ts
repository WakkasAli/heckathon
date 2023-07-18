// sanity/pet.ts
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'pname',
            type: 'string',
            title: 'Product Name'
        },  
        {
            name: 'image',
            title: 'Product Image',
            type: 'array',
            of:[{
                type:'image',
                fields:[{
                    name:"alt",
                    title:"Alt",
                    type:"string"
                }]
            }],
            options:{
                hotspot:true,
            }
        },  
        {
            name: 'price',
            type: 'number',
            title: 'Product Price'
        },  
        {
            name: 'category',
            type: 'string',
            title: 'Product Category'
        }, 
        {
            name: 'quantity',
            type: 'number',
            title: 'Product Quantity'
        },  
        {
            name: 'pdetail',
            type: 'string',
            title: 'Product Detail'
        },  
        {
            name: 'pcare',
            type: 'string',
            title: 'Product Care'
        }
    ]
}