import { Box, Flex, Text, AspectRatio, VStack, Spacer, Stack, Button } from '@chakra-ui/react'

export default function MinhaHistoria() {
    return (
        <Box w='full' bg='#f3f3f3'>
            <Flex maxW='1120px' w='100%' py='75px' px='10px' m='auto' direction='column' align='center' textAlign='center'>
                <Text as='h1'>MINHA HISTÓRIA</Text>
                <Text as='h5'>EMPREENDEDOR CARIOCA APAIXONADO POR VENDAS, MARKETING E VAREJO</Text>

                <Stack direction={['column', 'row']} w='full' pt='45px'>
                    <AspectRatio maxW='560px' w='100%' h='323px' ratio={1}>
                        <iframe
                            title='naruto'
                            src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                            allowFullScreen
                        />
                    </AspectRatio>
                    <VStack align='left' py={8} px={4} maxW='560px'>
                        <Text fontWeight='bold' as='h4'>DE VENDEDOR DE CARTÃO DE VISITAS A BILHÕES DE REAIS EM TRANSAÇÕES ONLINE</Text>
                        <Spacer />
                        <Text as='h5'>Assista o documentário gravado pela Bubas Video narrando a história da jornada do empreendedor Alfredo Soares, do início à depressão até a venda da sua startup Xtech Commerce para a gigante VTEX.</Text>
                        <Spacer />
                        <Button fontSize='12px' w='145px' h='62px' borderRadius='unset' bg='black' color='#fff' _hover={{ bg: '#BF2244' }}>ASSISTA O VÍDEO</Button>
                    </VStack>
                </Stack>

                <Stack direction={['column', 'row']} w='full' pt='45px'>
                    <VStack align='left' py={8} px={4} maxW='560px'>
                        <Text fontWeight='bold' as='h4'>MUITO ALÉM DO IPO DA VTEX NA NYSE, O DIA QUE FOI O MARCO PARA UMA REGIÃO.</Text>
                        <Spacer />
                        <Text as='h5'>Gravado pela Trinta Dezessete durante a reta final para o IPO da VTEX na NYSE, o documentário mostra a perspectiva contada por Alfredo Soares de um sonho muito além da imaginação mas um comprometimento com um futuro declarado pelos empreendedores.</Text>
                        <Spacer />
                        <Button fontSize='12px' w='145px' h='62px' borderRadius='unset' bg='black' color='#fff' _hover={{ bg: '#BF2244' }}>ASSISTA O VÍDEO</Button>
                    </VStack>
                    <AspectRatio maxW='560px' w='100%' h='323px' ratio={1}>
                        <iframe
                            title='naruto'
                            src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                            allowFullScreen
                        />
                    </AspectRatio>
                </Stack>
            </Flex>
        </Box>
    )
}