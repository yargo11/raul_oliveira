import { HStack, Image, Icon } from '@chakra-ui/react'

import { FaSearch } from 'react-icons/fa'
import Desktop from './Desktop'
import Mobile from './Mobile'

interface ShowMenuProps {
    showMenu: boolean;
}

export default function MenuHeader({ showMenu = true }: ShowMenuProps) {

    return (
        <>
            {showMenu ?

                <HStack w='full' spacing='auto' bg='white' align='center' h='76px' px='3rem'>
                    <Image src='Logo-1024x239.png' h='2rem' />
                    <HStack h='full'>
                        <Desktop />
                    </HStack>
                    <Icon as={FaSearch} color='black' />
                </HStack>
                :
                <>
                    <Mobile />
                </>
            }
        </>
    )
}