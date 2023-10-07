import React from 'react'
interface Props{
    params:{ id:number,productId:number}
}

const page = ({params:{id,productId}}:Props) => {
  return (
    <div>product number {productId} for user number  {id} </div>
  )
}

export default page