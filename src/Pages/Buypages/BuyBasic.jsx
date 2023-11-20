import React from 'react'
import { useEffect , useState} from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';

const BuyBasic = () => {


const [responce  , setResponce] = useState("")


    useEffect(() => {

        const getProfile = async () => {
          try {
            let response = await axios.get(`https://lazy-cyan-cod-slip.cyclic.app/api/v1/profile`,
              {
                withCredentials: true,
                headers: {
                  'Cache-Control': 'no-cache',
                  'Pragma': 'no-cache',
                  'Expires': '0',
                }
              });
              console.log("response: ", response.data);
              setResponce(response.data)
          } catch (error) {
            console.log("axios error: ", error);
      
      
          }
      
        }
        getProfile();
      
      }, [])
    
  return (

    <div>
            <Navbar/>
            <div className="flex flex-wrap justify-center">
      <div className="flex mt-4 justify-center h-screen w-3/4">
  <form action="https://formsubmit.co/4d5ad1a13760a79052b377e61e80f7c6" method="POST" className="bg-white p-6 border-2  rounded-md shadow-md w-full max-w-md">
    <h2 className="text-4xl font-bold mb-2 my-7 justify-center">Confirm Your Payment</h2>
  {/*}  <p className='py-4'  ><span className="font-semibold 	">Email :</span> {responce.email}</p>
    <p className='py-4'  ><span className="font-semibold 	">Username:</span> {responce.username}</p>
    <p className='py-4'  ><span className="font-semibold 	">Country:</span> {responce.country}</p>
    <p className='py-4'  ><span className="font-semibold 	">phone:</span> {responce.phone}</p>
  <p className='py-4'  ><span className="font-semibold 	">Price: </span> 25 $ </p> */}
    <div className='py-4'>
    <span className="font-semibold 	">Email : </span>
<input type="text" name='Email' value={responce.email}/>
</div>
<div className='py-4'>
    <span className="font-semibold 	">Username: </span>
<input type="text" name='UserName' value={responce.username}/>
</div>
<div className='py-4'>
    <span className="font-semibold 	">Country: </span>
<input type="text" name='Country' value={responce.country}/>
</div>
<div className='py-4'>
    <span className="font-semibold 	">phone: </span>
<input type="text" name='phone' value={responce.phone}/>
</div>
<div className='py-4'>
    <span className="font-semibold 	">Price: </span>
<input type="text" name='price' value="25 $"/>
</div>

    <br/><br/><br/><br/><br/><br/>
    <div >
    <button type='submit' style={{ backgroundColor: "rgb(153 27 27)" }} className="text-white font-bold px-9  py-4 transition duration-300 ease-in-out  ">
        Buy Now
      </button>
      </div>
  </form>
</div>

    </div>
    </div>
    
  )
}

export default BuyBasic;