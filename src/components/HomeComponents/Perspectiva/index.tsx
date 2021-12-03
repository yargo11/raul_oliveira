import {Box, Flex, Text, Stack, Avatar } from '@chakra-ui/react'

export default function Perspectiva() {
    return (
        <Box w='full' bg='#BF2244'>
            <Flex maxW='1120px' w='100%' py='75px' px='10px' m='auto' direction='column' align='center' textAlign='center'>
                <Text as='h1' color='gray.50'>
                    CONFIRA OUTRA PERSPECTIVA
                </Text>

                <Stack direction={['column', null, null, 'row']} spacing={['60px', '30px']} pt='50px' align='center'>
                    <Flex maxW='312px' w='100%' h='434px' p='25px' direction='column' align='center' bg='#fff'>
                        <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' top='-70px' />
                        <Text as='h5' fontWeight='bold'>Camila Farani</Text>
                        <Text as='h5' >G2 Capital e Shark Tank Brasil</Text>
                        <Text as='h5' textAlign='center'>O Alfredo é um empreendedor que se destacou pela sua capacidade de execução. Ele é o sonho de qualquer investidor, um cara que se entrega para o negócio com muita intensidade e coloca muita energia no que está fazendo. Em suas palestras ele consegue transmitir essa conexão com as técnicas que ele apresenta.</Text>
                    </Flex>

                    <Flex maxW={['312px', null, null, '373px']} h={['434px', '494px']} p='25px' direction='column' align='center' bg='#fff'>
                        <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' top='-70px' />
                        <Text as='h5' fontWeight='bold'>Camila Farani</Text>
                        <Text as='h5' >G2 Capital e Shark Tank Brasil</Text>
                        <Text as='h5' textAlign='center'>O Alfredo é um empreendedor fora da curva, um dos poucos que consegue liderar entregando visão, execução e venda em alto nível. É dono de uma energia única, orientado a resultados e ele gosta de desafios grandes, ponto. Nas primeiras conversas que tivemos eu tinha a certeza que o Alfredo era um pouco louco e um pouco gênio. Hoje acho que ele é muito dos dois e cada vez mais sua jornada inspira as empresas, plateias e pessoas que fazem parte no nosso ecossistema.</Text>
                    </Flex>

                    <Flex maxW='312px' w='100%' h='434px' p='25px' direction='column' align='center' bg='#fff'>
                        <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' top='-70px' />
                        <Text as='h5' fontWeight='bold'>Camila Farani</Text>
                        <Text as='h5' >G2 Capital e Shark Tank Brasil</Text>
                        <Text as='h5' textAlign='center'>O Alfredo é o típico empreendedor brasileiro. Suas conquistas foram baseadas em sua competência, recursos próprios e muita, muita energia para superar todas as adversidades que surgiram pelo caminho. Além de sua competência destaco um predicado que para mim é o mais relevante: 'é um cara de valor'.</Text>
                    </Flex>
                </Stack>
            </Flex>
        </Box>
    )
}