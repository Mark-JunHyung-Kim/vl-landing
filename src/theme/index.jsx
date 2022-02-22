import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                color: 'gray.600',
                fonts: 'Noto Sans KR',
            },
            'svg': {
                marign: 10
            }
        },
    },

    fonts: {
        heading: 'Noto Sans KR',
        // Text: 'Noto Sans KR',
        body: 'Noto Sans KR',
    },  
});

export default theme;
