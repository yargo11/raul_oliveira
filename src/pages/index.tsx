import { Flex, Box, Text, Link, VStack, Square, Stack, HStack, SimpleGrid, AspectRatio, Button, Spacer, Avatar, Circle, Image, Icon } from '@chakra-ui/react'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import IntroBanner from '../components/HomeComponents/IntroBanner'



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

      <Flex w='full' pt='75px' justify='center' align='center' bg='#fff'>
        <Text color='#333333' w='730px' textAlign='center'>
          Empreendedor, apaixonado por vendas, marketing e varejo. Soares hoje é sócio e vice-presidente institucional da VTEX, co-fundador e mentor do Gestão 4.0, investidor anjo em mais de 25 startups, palestrante e autor dos best-sellers Bora Vender e Bora Varejo.
        </Text>
      </Flex>
      <Flex w='full' pt='75px' justify='center' align='center' bg='#fff' direction='column'>
        <Text as='h1' color='#333333' textAlign='center'>VEJA COMO EU POSSO TE AJUDAR</Text>
        <Text as='h5' color='#333333' textAlign='center'>EXPLORE MEUS CONTEÚDOS PARA PODER ALAVANCAR SUA CARREIRA OU SEU NEGÓCIO</Text>
      </Flex>
      <Flex maxW='1120px' w='100%' pb='75px' px='10px' m='auto' wrap='wrap' justify='space-between' >
        <SimpleGrid minChildWidth='353px' spacing='10px' w='full'>
          <Square h='235px' bg='pink.300' />
          <Square h='235px' bg='pink.300' />
          <Square h='235px' bg='pink.300' />
          <Square h='235px' bg='pink.300' />
          <Square h='235px' bg='pink.300' />
          <Square h='235px' bg='pink.300' />
        </SimpleGrid>
      </Flex>
      <Box w='full' bg='#f3f3f3'>
        <Flex maxW='1120px' w='100%' py='75px' px='10px' m='auto' direction='column' align='center'>
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
      <Box w='full' bg='#BF2244'>
        <Flex maxW='1120px' w='100%' py='75px' px='10px' m='auto' direction='column' align='center'>
          <Text as='h1' color='gray.50'>
            CONFIRA OUTRA PERSPECTIVA
          </Text>

          <Stack direction={['column', 'row']} spacing={['60px', '30px']} pt='50px' align='center'>
            <Flex maxW='312px' w='100%' h='434px' p='25px' direction='column' align='center' bg='#fff'>
              <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' top='-70px' />
              <Text as='h5' fontWeight='bold'>Camila Farani</Text>
              <Text as='h5' >G2 Capital e Shark Tank Brasil</Text>
              <Text as='h5' textAlign='center'>O Alfredo é um empreendedor que se destacou pela sua capacidade de execução. Ele é o sonho de qualquer investidor, um cara que se entrega para o negócio com muita intensidade e coloca muita energia no que está fazendo. Em suas palestras ele consegue transmitir essa conexão com as técnicas que ele apresenta.</Text>
            </Flex>

            <Flex maxW={['312px', '373px']} h={['434px', '494px']} p='25px' direction='column' align='center' bg='#fff'>
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
      <Box w='full' bg='#fff'>
        <Flex maxW='1120px' w='100%' py='75px' px='10px' m='auto' direction='column' align='center'>
          <Text as='h1' color='gray.900'>
            CONHEÇA MEUS LIVROS
          </Text>
          <Text color='#333333' w='730px' textAlign='center'>
            MAIS DE 70 MIL LIVROS VENDIDOS NOS ÚLTIMOS DOIS ANOS
          </Text>

          <Stack direction={['column', 'row']} spacing={['60px', '30px']} pt='50px' align='top'>
            <Square w='143px' h='212px' bg='pink.500' />
            <Flex maxW='312px' h='434px' p='25px' direction='column' align='center' bg='#fff'>
              <Text as='h4' fontWeight='bold'>BORA VENDER: A MELHOR ESTRATÉGIA É ATITUDE</Text>
              <Text as='h5' >Você pode não saber vender ou até não se achar vendedor. Mas, em algum momento, você já foi um. Vender deixou de ser a troca de produtos ou serviços por dinheiro e tornou-se encantamento, conquista, fidelização e alinhamento de interesses.</Text>
              <Button w='143px' h='62px' mt='auto' mr='auto' bg='red.500' borderRadius='unset'>COMPRAR LIVRO</Button>
            </Flex>
            <Square w='143px' h='212px' bg='pink.500' />
            <Flex maxW='312px' h='434px' p='25px' direction='column' align='center' bg='#fff'>
              <Text as='h4' fontWeight='bold'>BORA VAREJO: COMO A CULTURA DE TRANSFORMAÇÃO DIGITAL AJUDOU AS EMPRESAS A ENFRENTAREM A MAIOR CRISE DO SÉCULO</Text>
              <Text as='h5' >Durante a pandemia do Covid-19, eu convideo os maiores empresários do Brasil para discutir as principais práticas usadas durante a aceleração digital que causou a disrupção do varejo.</Text>
              <Button w='143px' h='62px' mt='auto' mr='auto' bg='red.500' borderRadius='unset'>COMPRAR LIVRO</Button>
            </Flex>
          </Stack>
        </Flex>
      </Box>

      <Box w='full' bg='#f3f3f3'>
        <Flex maxW='1120px' w='100%' py='75px' px='10px' m='auto' direction='column' align='center'>
          <Text as='h1' color='gray.900'>
            LEIA. ASSISTA. OUÇA.
          </Text>
          <Text color='#333333' w='730px' textAlign='center'>
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