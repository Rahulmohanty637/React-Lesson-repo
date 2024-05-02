import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
 const {user} = useContext(UserContext);

 if(!user) return <div>User Not Found</div>

 return <div>Welcome {user.usrename}</div>
}

export default Profile
