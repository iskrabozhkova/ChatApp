import React, {useState} from 'react'
import { Button, Input } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

type Props = {}


export const Register = (props: Props) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [photo, setPhoto] = useState<string>("");

    const submitHandler = () => {
      if(!username || !password){
        toast.error('Please fill all fields!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
      try{
        axios.post('/api/user', {
          username,
          password,
          photo
        })
      }catch(error){
        toast.error('Error with registration!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          });
      }
    }
  return (
    <div>
        <Input 
        placeholder='Enter username'
        onChange={(e) => setUsername(e.target.value)}/>
        <Input 
        placeholder='Enter password'
        onChange={(e) => setPassword(e.target.value)}/>
        <Input 
        placeholder='Enter photo url'
        onChange={(e) => setPhoto(e.target.value)}/>
        <Button onClick={submitHandler}>Register</Button>
        <ToastContainer />
    </div>
  )
}