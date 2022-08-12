import React from 'react'
import { Box, Container, Tab, TabList, Tabs, TabPanel, TabPanels, Flex} from '@chakra-ui/react'
import {Login} from '../Login/Login'
import {Register} from '../Register/Register'

type Props = {}

export const HomePage = (props: Props) => {
  return (
    <div>
      <Container w='50%' centerContent m="0px auto" p={100}>
      <Box 
      bg='#eef7f7' 
      w='100%'
      p={20} 
      color='black'
      borderRadius='20px'
   >
    <Tabs variant='soft-rounded' colorScheme='green'>
     
      <TabList>
    <Tab p='6px' w='35%' borderRadius='20px' m='10px'>Login</Tab>
    <Tab p='6px' w='35%' borderRadius='20px' m='10px'>Register</Tab>
  </TabList>
 

  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
    <Register/>
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>
      </Container>
    </div>
  )
}