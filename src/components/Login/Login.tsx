import React, {useState} from 'react'
import { Button, Input } from '@chakra-ui/react'

type Props = {}

export const Login = (props: Props) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  return (
    <div>
        <Input 
        placeholder='Enter username'
        onChange={(e) => setUsername(e.target.value)}/>
        <Input 
        placeholder='Enter password'
        onChange={(e) => setUsername(e.target.value)}/>
        <Button>Login</Button>
    </div>
  )
}