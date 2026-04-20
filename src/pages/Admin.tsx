import { useEffect, useState } from 'react'
import { Heading } from '../components/Heading'
import API from '../lib/api'

export const Admin = () => {
    const [ isLoading,setIsLoading] = useState(true)

    const [authorized,SetAuthorized] = useState(Boolean)
    const [adminData,setAdminData]=useState("")
    useEffect(()=>{
        const fetchAdmin = async()=>{
            try {
      const res = await API.get<any>("/test/admin");
      console.log(res.data);
      setIsLoading(false);
      
      setAdminData(res.data)
      SetAuthorized(true)
      
    

    } catch (error: any) {
      SetAuthorized(false)
      setIsLoading(false)
      
    }
  };

        fetchAdmin()
    },[])

   

 
    
  return isLoading ?( 
    <h1>Is Loading...</h1>
  ) : authorized? (<Heading headingText={adminData}></Heading>) 
  : (<Heading headingText='NOT PERMITTED'></Heading>)

};
