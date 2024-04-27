import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

const Github = () => {

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.github.com/users/Rahulmohanty637')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data);
  //   })
  // }, [])

  const data =  useLoaderData(githubInfoLoader);


  return (
    <div className='text-center'>Github followers : {data.followers}
    <img src={data.avatar_url} alt='profile picture'></img>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
  const response = await fetch("https://api.github.com/users/Rahulmohanty637");
  return response.json();
}