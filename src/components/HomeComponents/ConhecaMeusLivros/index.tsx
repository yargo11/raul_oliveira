import { Box, Flex, Stack, Text, Square, Button } from '@chakra-ui/react'

export default function ConhecaMeusLivros() {
    return (
        <Box w='full' bg='#fff'>
            <Flex maxW='1120px' w='100%' py='75px' px='10px' m='auto' direction='column' align='center' textAlign='center'>
                <Text as='h1' color='gray.900'>
                    CONHEÇA MEUS LIVROS
                </Text>
                <Text as='h4' color='#333333' maxW='730px' w='100%' textAlign='center'>
                    MAIS DE 70 MIL LIVROS VENDIDOS NOS ÚLTIMOS DOIS ANOS
                </Text>

                <Stack direction={['column', 'row']} spacing={['30px', '30px']} pt='50px' align='center'>
                    <Square w='143px' h='212px' bg='pink.500' />
                    <Flex maxW='312px' h={['auto','434px']} p='25px' direction='column' align='center' bg='#fff'>
                        <Text as='h4' fontWeight='bold'>BORA VENDER: A MELHOR ESTRATÉGIA É ATITUDE</Text>
                        <Text as='h5' >Você pode não saber vender ou até não se achar vendedor. Mas, em algum momento, você já foi um. Vender deixou de ser a troca de produtos ou serviços por dinheiro e tornou-se encantamento, conquista, fidelização e alinhamento de interesses.</Text>
                        <Button
                            w='143px'
                            h='62px'
                            mt={['1rem','auto']}
                            mx='auto'
                            bg='red.500'
                            p='0.5rem'
                            borderRadius='unset'
                            fontSize={['0.65rem', '0.75rem', '0.875rem']}
                            color='gray.50'
                        >COMPRAR LIVRO</Button>
                    </Flex>
                    <Square w='143px' h='212px' bg='pink.500' />
                    <Flex maxW='312px' h={['auto','434px']} p='25px' direction='column' align='center' bg='#fff'>
                        <Text as='h4' fontWeight='bold'>BORA VAREJO: COMO A CULTURA DE TRANSFORMAÇÃO DIGITAL AJUDOU AS EMPRESAS A ENFRENTAREM A MAIOR CRISE DO SÉCULO</Text>
                        <Text as='h5' >Durante a pandemia do Covid-19, eu convideo os maiores empresários do Brasil para discutir as principais práticas usadas durante a aceleração digital que causou a disrupção do varejo.</Text>
                        <Button
                            w='143px'
                            h='62px'
                            mt={['1rem','auto']}
                            mx='auto'
                            bg='red.500'
                            p='0.5rem'
                            borderRadius='unset'
                            fontSize={['0.65rem', '0.75rem', '0.875rem']}
                            color='gray.50'
                        >COMPRAR LIVRO</Button>
                    </Flex>
                </Stack>
            </Flex>
        </Box>
    )
}