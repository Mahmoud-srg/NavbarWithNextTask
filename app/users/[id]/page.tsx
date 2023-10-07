import React from 'react'
interface Props{
    params:{id:number}
}
const Userdetails = ({params:{id}}:Props) => {
  return (
    <div>
        Userdetails {id}
    </div>
  )
}

export default Userdetails