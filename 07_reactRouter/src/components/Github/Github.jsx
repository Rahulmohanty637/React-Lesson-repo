import React, { useEffect, useState } from 'react'

const Github = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Rahulmohanty637')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data);
    })
  }, [])
  return (
    <div className='text-center'>Github followers : {data.followers}
    <img src={data.avatar_url} alt='profile picture'></img>
    </div>
  )
}

export default Github