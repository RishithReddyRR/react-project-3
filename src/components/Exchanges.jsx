import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {server} from '../index'
import { Container,Image,VStack,Heading,HStack} from '@chakra-ui/react'
import Loader from './Loader'
function Exchanges() {
  const [exchanges,setExchanges]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(false)

  useEffect(
    ()=>{
        const fetchExchanges= async ()=>{
          try{
            const {data}=await axios.get(`${server}/exchanges`)
            setExchanges(data)
            setLoading(false)}
            catch(Error){
              setError(true)
            }
        }

        fetchExchanges();
    },[]
  )
  if(error){
    return <Error/>
  }
  return (

    <Container maxW={'container.xl'}>
      { loading?<Loader />:<HStack flexWrap={'wrap'} justifyContent='space-evenly'>
          {
            exchanges.map(i=><ExchangeCard
              key={i.id}
              name={i.name}
              img={i.image}
              rank={i.trust_score_rank}
              url={i.url}
            />)
          }
        </HStack>}
    </Container>
  )
}
function ExchangeCard({name,rank,img,url}){
  return( 
  <a href={url} target="blank">
    <VStack
    w={"52"}
    shadow={"lg"}
    p={"8"}
    borderRadius={"lg"}
    transition={"all 0.3s"}
    m={"4"}
    css={{
      "&:hover": {
        transform: "scale(1.1)",
      },
    }}
    >
      <Image src={img} w={10} h={10} objectFit="contain"/>
      <Heading size={'md'} noOfLines={'1'}>{rank}</Heading>
      <Heading size={'md'} noOfLines={'1'}>{name}</Heading>
    </VStack>
  </a>)
  
} 
function Error(){
  return <div>Error</div>
}
export default Exchanges