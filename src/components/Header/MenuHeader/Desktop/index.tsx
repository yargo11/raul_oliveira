import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function Desktop() {
    return (
        <>
            <Menu>
                <MenuButton
                    aria-controls='1'
                    as={Button}
                    h='full'
                    display='flex'
                    alignItems='center'
                    transition='background, color 0.3s'
                    bg='unset'
                    borderRadius='unset'
                    rightIcon={<ChevronDownIcon />}
                    _hover={{
                        bg: 'black',
                        color: 'white'
                    }}
                    _active={{
                        bg: 'black',
                        color: 'white'
                    }}
                    fontSize={[null,null,'0.75rem',null,'1rem']}
                >
                    EDUCAÇÃO
                </MenuButton>
                <MenuList
                    bg='black'
                    color='gray.50'
                    borderRadius='unset'
                    borderColor='black'
                    w='50px'
                >
                    <MenuItem
                        transition='color 0.2s'
                        _hover={{
                            color: 'red.500'
                        }}
                        _active={{
                            bg: 'black'
                        }}
                        _focus={{
                            bg: 'black',
                            color: 'white'
                        }}
                    >LIVROS
                    </MenuItem>
                    <MenuItem
                        transition='color 0.2s'
                        _hover={{
                            color: 'red.500'
                        }}
                        _active={{
                            bg: 'black'
                        }}
                        _focus={{
                            bg: 'black',
                            color: 'white'
                        }}
                    >CURSOS ONLINE
                    </MenuItem>
                    <MenuItem
                        transition='color 0.2s'
                        _hover={{
                            color: 'red.500'
                        }}
                        _active={{
                            bg: 'black'
                        }}
                        _focus={{
                            bg: 'black',
                            color: 'white'
                        }}
                    >CONTRATE
                    </MenuItem>
                    <MenuItem
                        transition='color 0.2s'
                        _hover={{
                            color: 'red.500'
                        }}
                        _active={{
                            bg: 'black'
                        }}
                        _focus={{
                            bg: 'black',
                            color: 'white'
                        }}
                    >IMERSÃO
                    </MenuItem>

                </MenuList>
            </Menu>
            <Menu>
                <MenuButton
                    aria-controls='2'
                    as={Button}
                    h='full'
                    display='flex'
                    alignItems='center'
                    transition='background, color 0.3s'
                    bg='unset'
                    borderRadius='unset'
                    rightIcon={<ChevronDownIcon />}
                    _hover={{
                        bg: 'gray.900',
                        color: 'gray.50'
                    }}
                    fontSize={[null,null,'0.75rem',null,'1rem']}
                >
                    CONTEÚDO
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton
                    as={Button}
                    h='full'
                    display='flex'
                    alignItems='center'
                    transition='background, color 0.3s'
                    bg='unset'
                    borderRadius='unset'
                    rightIcon={<ChevronDownIcon />}
                    _hover={{
                        bg: 'gray.900',
                        color: 'gray.50'
                    }}
                    fontSize={[null,null,'0.75rem',null,'1rem']}
                >
                    PARCERIAS
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton
                    aria-controls='3'
                    as={Button}
                    h='full'
                    display='flex'
                    alignItems='center'
                    transition='background, color 0.3s'
                    bg='unset'
                    borderRadius='unset'
                    rightIcon={<ChevronDownIcon />}
                    _hover={{
                        bg: 'gray.900',
                        color: 'gray.50'
                    }}
                    fontSize={[null,null,'0.75rem',null,'1rem']}
                >
                    MOVIMENTOS
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton
                    aria-controls='4'
                    as={Button}
                    h='full'
                    display='flex'
                    alignItems='center'
                    transition='background, color 0.3s'
                    bg='unset'
                    borderRadius='unset'
                    rightIcon={<ChevronDownIcon />}
                    _hover={{
                        bg: 'gray.900',
                        color: 'gray.50'
                    }}
                    fontSize={[null,null,'0.75rem',null,'1rem']}
                >
                    SOBRE
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton
                    aria-controls='5'
                    as={Button}
                    h='full'
                    display='flex'
                    alignItems='center'
                    transition='background, color 0.3s'
                    bg='unset'
                    borderRadius='unset'
                    rightIcon={<ChevronDownIcon />}
                    _hover={{
                        bg: 'gray.900',
                        color: 'gray.50'
                    }}
                    fontSize={[null,null,'0.75rem',null,'1rem']}
                >
                    CONTATO
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}