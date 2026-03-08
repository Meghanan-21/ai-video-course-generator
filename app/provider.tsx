"use client"
import React from 'react'
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '@/context/UserDetailContext';


const Provider = ({children}: {children: React.ReactNode}) => {
    const { user } = useUser();
    const [userDetails, setUserDetails] = React.useState(null);

    const CreateNewUser = async () => {
        //user API endpoint call to create a new user
        const result = await axios.post('/api/user',{});
        console.log(result.data);
        setUserDetails(result.data);//user info is saved as

        //user API endpoint to craete a new user in the database
    }

    React.useEffect(() => {
        if(user) {
            console.log("User Object:", user);
            CreateNewUser();
        }
    }, [user]);

  return (
    <div>
      <UserDetailContext.Provider value={{ userDetails, setUserDetails}}>
        <div className='max-w-7xl mx-auto'>
        {children}
        </div>
      </UserDetailContext.Provider>
    </div>
  )
}

export default Provider
