import { Link, Icon, HStack, StackDivider, Box, useBreakpointValue } from '@chakra-ui/react'

import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

import MenuHeader from './MenuHeader'

export default function Header() {

    const isWideScreen = useBreakpointValue({ base: false, lg: true })

    return (
        <Box>
            <HStack w='full' spacing='auto' bg='black' align='center' h='2.5rem' px={['1rem','3rem']} color='gray.50'>
                <HStack spacing='auto' divider={<StackDivider borderColor='gray.200' />} w='320px'>
                    <Link href='#'
                        fontWeight='bold'
                        _hover={{
                            color: 'green.400'
                        }}>
                        +55 (21) 9.999-9999
                    </Link>
                    <HStack justify='space-between' w='max'>
                        <Link href='#' _hover={{ color: '#C13584' }} align='center' display='flex' ><Icon as={FaInstagram} /></Link>
                        <Link href='#' _hover={{ color: '#0e76a8' }} align='center' display='flex' ><Icon as={FaLinkedin} /></Link>
                        <Link href='#' _hover={{ color: '#FF0000' }} align='center' display='flex' ><Icon as={FaYoutube} /></Link>
                    </HStack>
                </HStack>
                <Link href='#' _hover={{ color: 'pink.500' }}>COMUNIDADE</Link>
            </HStack>
            <MenuHeader showMenu={isWideScreen}/>
        </Box>
    )
}