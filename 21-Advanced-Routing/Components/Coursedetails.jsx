import React from 'react'
import { useParams } from 'react-router-dom'

function CourseDetails() {
    const params = useParams(); // search bar me jo id lagai hai(cours/:id) to us id me jo hai vo dekhne ke liye
  return (
    <div>{params.id} is Not found</div>
  )
}

export default CourseDetails