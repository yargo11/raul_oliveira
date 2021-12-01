import {
    Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
    Button, Box, Link, Text, useDisclosure, Icon
} from '@chakra-ui/react'

import { FiMenu } from 'react-icons/fi'

import React from 'react'

export default function Mobile() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen} w='full' borderRadius='unset'>
                <Icon as={FiMenu} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Raul Oliveira</DrawerHeader>

                    <DrawerBody>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            EDUCAÇÃO
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Link as={Text} href='#' mb='0.25rem'>LIVROS</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>CURSOS ONLINE</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>CONTRATE</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>IMERSÃO</Link>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            CONTEÚDO
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Link as={Text} href='#' mb='0.25rem'>LIVROS</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>CURSOS ONLINE</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>CONTRATE</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>IMERSÃO</Link>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            PARCERIAS
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Link as={Text} href='#' mb='0.25rem'>LIVROS</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>CURSOS ONLINE</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>CONTRATE</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>IMERSÃO</Link>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            MOVIMENTOS
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Link as={Text} href='#' mb='0.25rem'>LIVROS</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>CURSOS ONLINE</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>CONTRATE</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>IMERSÃO</Link>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            SOBRE
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Link as={Text} href='#' mb='0.25rem'>LIVROS</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>CURSOS ONLINE</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>CONTRATE</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>IMERSÃO</Link>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            CONTATO
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Link as={Text} href='#' mb='0.25rem'>LIVROS</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>CURSOS ONLINE</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>CONTRATE</Link>
                                    <Link as={Text} href='#' mb='0.25rem'>IMERSÃO</Link>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}