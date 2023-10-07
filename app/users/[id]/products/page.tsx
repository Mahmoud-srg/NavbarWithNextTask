import React from 'react'

const page = ({params}:{params:{id:string}}) => {
  return (
    <div> all products for user number {params.id}</div>
  )
}

export default page