import { Flex, Link } from '@chakra-ui/react'

export default function IntroBanner() {
    return (
        <Flex
            w='full'
            h='100vh'
            backgroundImage="url('/thmb_p2_2.pngdes.png')"
            backgroundRepeat='no-repeat'
            bgPosition={['-120px', '0px']}
            bgSize='cover'

        >

            <Link
                position='relative' 

                // ml={[null,'65%']}
                mx={['auto',null]}
                mt='80vh'
                h='42px'
                w='239px'
                alignItems='center'
                justifyContent='center'

                display='flex'
                textDecoration='none'
                
                bg='#bf2244'
                px={2}
                fontSize='12px'
                fontWeight='bold'
                color='gray.50'
            > ASSITA AGORA NO YOUTUBE</Link>
        </Flex>
    )
}