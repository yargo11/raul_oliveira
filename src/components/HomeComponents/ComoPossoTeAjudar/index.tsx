import { Flex, SimpleGrid, Square, Text, Box } from '@chakra-ui/react'

export default function ComoPossoTeAjudar() {
    return (
        <Box>
            <Flex w='full' pt='75px' justify='center' align='center' bg='#fff'>
                <Text color='#333333' w='730px' textAlign='center'>
                    Empreendedor, apaixonado por vendas, marketing e varejo. Soares hoje é sócio e vice-presidente institucional da VTEX, co-fundador e mentor do Gestão 4.0, investidor anjo em mais de 25 startups, palestrante e autor dos best-sellers Bora Vender e Bora Varejo.
                </Text>
            </Flex>
            <Flex w='full' pt='75px' justify='center' align='center' bg='#fff' direction='column'>
                <Text as='h1' color='#333333' textAlign='center'>VEJA COMO EU POSSO TE AJUDAR</Text>
                <Text as='h5' color='#333333' textAlign='center'>EXPLORE MEUS CONTEÚDOS PARA PODER ALAVANCAR SUA CARREIRA OU SEU NEGÓCIO</Text>
            </Flex>
            <Flex maxW='1120px' w='100%' py='65px' m='auto'>
                <SimpleGrid minChildWidth='280px' spacing='10px' w='full'>
                    <Square h='235px' bg='pink.300' />
                    <Square h='235px' bg='pink.300' />
                    <Square h='235px' bg='pink.300' />
                    <Square h='235px' bg='pink.300' />
                    <Square h='235px' bg='pink.300' />
                    <Square h='235px' bg='pink.300' />
                </SimpleGrid>
            </Flex>
        </Box>
    )
}