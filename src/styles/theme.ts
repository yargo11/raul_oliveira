import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: '#fff',
                color: 'gray.900',
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
            },
            h1: {
                fontSize: ['2.25rem', '2.75rem', '3rem'],
                fontWeight: '800',
            },
            h2: {
                fontSize: ['1.95rem', '2.2rem', '2.6rem'],
                fontWeight: '800',
                lineHeight: '42px'
            },
            h3: {
                fontSize: ['1.5rem', '1.75rem', '2rem'],
                fontWeight: '700'
            },
            h4: {
                fontSize: ['0.75rem', '1rem', '1.2rem'],
            },
            h5: {
                fontSize: ['0.75rem', '0.875rem', '1rem'],
                
            },
            h6: {
                fontSize: ['0.75rem', '0.875rem', '1rem'],
                fontFamily: 'Inter'
            },

        }
    },
    fonts: {
        heading: 'Inter, Raleway',
        body: 'Inter, Raleway'
    },

});
