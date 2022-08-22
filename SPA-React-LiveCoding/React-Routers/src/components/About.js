import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// outlet is just like a placeholder for our nested element
//An <Outlet> should be used in parent route elements to render their child route elements.
export default function About() {
  return (
    <div>
 
        <h1>About Page</h1>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatibus illo ipsa officia? Sequi aperiam error eveniet dolores enim laboriosam quo magni quia eum debitis quod quisquam, similique perferendis dolor corporis voluptas est, accusantium beatae illo deserunt aliquam. Ratione, veniam ipsa. Totam sunt nostrum quam illo dicta, cumque voluptates, rem voluptas facere excepturi voluptatum perferendis saepe voluptatem laudantium et quasi! Tempora voluptas necessitatibus molestias reprehenderit nulla, assumenda soluta illum nihil iusto delectus deleniti libero dolorem odit consequatur repudiandae animi repellendus totam excepturi voluptatibus amet. Saepe illum molestias deleniti, voluptate quos reiciendis repudiandae quidem dicta libero dolores enim quo, rerum expedita!</p>
       
        <Link to="/about/more">more about us</Link>

        <Link to="/about/me">about me</Link>
        <Outlet/>
    </div>
  )
}
