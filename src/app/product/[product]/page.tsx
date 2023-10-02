import React from 'react'

interface ProductParams{
    params : {product: string}, 
}

export default function page({params} :  ProductParams ) : React.ReactNode {
    const {product} = params; 
  return (
    <div>product {product}</ div>
  )
}
