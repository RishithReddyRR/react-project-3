import { HStack,Button } from '@chakra-ui/react'
import React from 'react'
import { Link} from 'react-router-dom'
function Header() {
  return (
    <HStack bgColor={"blackAlpha.800"} p={'4'} shadow={'base'} justifyContent={'space-around'}>
        <Button variant={'unstyled'} color={'white'}>
            <Link to='/'>Home</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'}>
            <Link to='/coins'>Coins</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'}>
            <Link to='/Exchanges'>Exchanges</Link>
        </Button>
    </HStack>
  )
}

export default Header