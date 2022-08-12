import axios, {AxiosResponse} from 'axios'
import React, { useEffect, useState } from 'react'


type Props = {}

export interface ChatItem{
  name: string;
  email:string;
}
export interface ChatType {
  isGroupChat: boolean;
  users: ChatItem[];
  id: string;
  chatName: string;
  data: string[]
}
const defaultChats:ChatType[] = [];

export const ChatPage = (props: Props) => {
  const [chats, setChats] : [ChatType[], (chats: ChatType[]) => void]= useState(defaultChats);

  const fetchChats = () => {
     axios.get<ChatType[]>('/api/chats').then((res) => {
       //console.log(res.data)
       setChats(res.data);
     })
  }
  //console.log(chats)
  useEffect(() =>{
      fetchChats();
  },[])
  return (
    <div>
        {chats.map((chat) => (
          <li>{chat.chatName}</li>
        ))}
    </div>
  )
}