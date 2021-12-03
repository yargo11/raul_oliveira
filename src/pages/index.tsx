import { Flex, Box, Text, Link, VStack, Square, Stack, HStack, SimpleGrid, AspectRatio, Button, Spacer, Avatar, Circle, Image, Icon } from '@chakra-ui/react'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import ComoPossoTeAjudar from '../components/HomeComponents/ComoPossoTeAjudar'
import ConhecaMeusLivros from '../components/HomeComponents/ConhecaMeusLivros'
import IntroBanner from '../components/HomeComponents/IntroBanner'
import MinhaHistoria from '../components/HomeComponents/MinhaHistoria'
import Perspectiva from '../components/HomeComponents/Perspectiva'



export default function Home() {
  return (
    <Box w='full'>

      <IntroBanner />

      <Flex w='full' h='175px' bg='#f7f7f7' color='#333333' justify='center'>
        <VStack>
          <Text>
            NA IMPRENSA
          </Text>
        </VStack>
      </Flex>

      <ComoPossoTeAjudar />

      <MinhaHistoria />

      <Perspectiva />
      
      <ConhecaMeusLivros />

      <Box w='full' bg='#f3f3f3'>
        <Flex maxW='1120px' w='100%' py='75px' px='10px' m='auto' direction='column' align='center'>
          <Text as='h1' color='gray.900'>
            LEIA. ASSISTA. OUÇA.
          </Text>
          <Text color='#333333' maxW='730px' w='100%' textAlign='center'>
            ESCOLHA O FORMATO DE CONTEÚDO E ACESSE ESTRATÉGIAS E INSIGHTS
          </Text>

          <Stack direction={['column', 'row']} spacing={['60px', '30px']} pt='50px' align='top'>
            <Square w='353PX' h='253px' bg='pink.500' transition='padding-bottom 0.3s' _hover={{ paddingBottom: '80px' }}>
              <Text>COLUNAS</Text>
            </Square>

            <Square w='353PX' h='253px' bg='pink.500' transition='padding-bottom 0.3s' _hover={{ paddingBottom: '80px' }}>
              <Text>YOUTUBE</Text>
            </Square>

            <Square w='353PX' h='253px' bg='pink.500' transition='padding-bottom 0.3s' _hover={{ paddingBottom: '80px' }}>
              <Text>PODCAST</Text>
            </Square>

          </Stack>
        </Flex>
      </Box>

      <Box w='full' bg='#fff'>
        <Flex maxW='1120px' w='100%' py='75px' px='10px' m='auto' direction='column' align='center'>
          <Text as='h1' color='gray.900'>
            IMPACTO DIGITAL
          </Text>

          <Stack direction={['column', 'row']} spacing={['60px', '30px']} pt='50px' align='top'>
            <VStack spacing='0px'>
              <Circle size='76px' bg='tomato' color='white' />
              <Text fontSize='2rem'>+10 Milhões</Text>
              <Text>views por mês</Text>
            </VStack>
            <VStack spacing='0px'>
              <Circle size='76px' bg='tomato' color='white' />
              <Text fontSize='2rem'>+10 Milhões</Text>
              <Text>views por mês</Text>
            </VStack>
            <VStack spacing='0px'>
              <Circle size='76px' bg='tomato' color='white' />
              <Text fontSize='2rem'>+10 Milhões</Text>
              <Text>views por mês</Text>
            </VStack>
            <VStack spacing='0px'>
              <Circle size='76px' bg='tomato' color='white' />
              <Text fontSize='2rem'>+10 Milhões</Text>
              <Text>views por mês</Text>
            </VStack>
            <VStack spacing='0px'>
              <Circle size='76px' bg='tomato' color='white' />
              <Text fontSize='2rem'>+10 Milhões</Text>
              <Text>views por mês</Text>
            </VStack>
          </Stack>

          <Text as='h1' color='gray.900' pt={20}>
            NÚMEROS DAS REDES
          </Text>

          <Stack direction={['column', 'row']} spacing={['60px', '30px']} pt='50px' align='top'>
            <VStack spacing='0px'>
              <Circle size='76px' bg='tomato' color='white' />
              <Text fontSize='2rem'>+10 Milhões</Text>
            </VStack>
            <VStack spacing='0px'>
              <Circle size='76px' bg='tomato' color='white' />
              <Text fontSize='2rem'>+10 Milhões</Text>
            </VStack>
            <VStack spacing='0px'>
              <Circle size='76px' bg='tomato' color='white' />
              <Text fontSize='2rem'>+10 Milhões</Text>
            </VStack>
            <VStack spacing='0px'>
              <Circle size='76px' bg='tomato' color='white' />
              <Text fontSize='2rem'>+10 Milhões</Text>
            </VStack>
            <VStack spacing='0px'>
              <Circle size='76px' bg='tomato' color='white' />
              <Text fontSize='2rem'>+10 Milhões</Text>
            </VStack>
          </Stack>
        </Flex>
      </Box>

      <Box w='full' bg='#F3F3F3'>
        <Flex py='75px' m='auto' direction='column' align='center'>
          <Text as='h1' color='gray.900'>
            RELACIONAMENTO COM MARCAS
          </Text>
          <Text color='#333333' w='730px' textAlign='center'>
            EMBAIXADOR E REQUISITADO PARA DIVERSAS CAMPANHAS COMO FORMADOR DE OPINIÃO
          </Text>

          <Flex w='full' pt={12}>
            <Image src='/03.png' />
            <Image src='/05.png' />
          </Flex>
        </Flex>
      </Box>

      <Box w='full' bg='#BF2244'>
        <Flex maxW='1120px' w='100%' py='75px' px='10px' m='auto' direction='column' align='center'>
          <Text as='h3' color='gray.50'>
            ACOMPANHE OS BASTIDORES
          </Text>
          <Text as='h5' color='gray.50'>
            Assista stories e publicações do dia a dia feitos pelo próprio
          </Text>
          <Button as='h6' color='#bf2244' borderRadius='unset' mt={8}>VER AGORA</Button>
        </Flex>
      </Box>

      <Box w='full' bg='#000000' color='gray.50'>
        <Flex maxW='1120px' w='100%' py='75px' px='10px' m='auto' direction='column' align='center'>
          <Stack direction={['column', 'row']} justify='space-between' w='full'>

            <Flex direction='column' w='278px' p='10px'>
              <Text as='h5'>ALFREDO SOARES</Text>
              <Text as='h6'>Empreendedor, apaixonado por vendas, marketing e varejo. Soares hoje é sócio da VTEX e presidente institucional da Loja Integrada, empresa do grupo VTEX, co-fundador e mentor do G4 Educação, investidor anjo em mais de 25 startups, palestrante e autor dos best-sellers BORA VENDER e BORA VAREJO.</Text>
              <Text as='h5'>CONECTE-SE COM ALFREDO</Text>
              <HStack justify='space-between' w='max'>
                <Link href='#' _hover={{ color: '#C13584' }} align='center' display='flex' ><Icon as={FaInstagram} /></Link>
                <Link href='#' _hover={{ color: '#0e76a8' }} align='center' display='flex' ><Icon as={FaLinkedin} /></Link>
                <Link href='#' _hover={{ color: '#FF0000' }} align='center' display='flex' ><Icon as={FaYoutube} /></Link>
              </HStack>
            </Flex>

            <Flex direction='column' w='155px' p='10px'>
              <Text as='h5'>Livros</Text>
              <Text as='h5'>Palestras</Text>
              <Text as='h5'>Cursos</Text>
              <Text as='h5'>Mentoria</Text>
              <Text as='h5'>Parcerias</Text>
            </Flex>

            <Flex direction='column' w='155px' p='10px'>
              <Text as='h5'>Biografia</Text>
              <Text as='h5'>Vagas</Text>
              <Text as='h5'>Comunidade</Text>
              <Text as='h5'>Contato</Text>
              <Text as='h5'>Press Kit</Text>
            </Flex>

            <Flex direction='column' w='310px' p='10px'>
              <Text as='h5' color='#bf2244'>{`>`} CONHEÇA A VTEX</Text>
              <Text as='h6' mb={12}>As maiores empresas do mundo confiam na VTEX para impulsionar seu comércio digital em mais de 30 países.</Text>
              <Text as='h5' color='#bf2244'>{`>`} CONHEÇA O G4 EDUCAÇÃO</Text>
              <Text as='h6'>Plataforma de educação com imersões presenciais e online para gestores, c-levels e empreendedores</Text>
            </Flex>
          </Stack>
        </Flex>
      </Box>

    </Box>
  )
}