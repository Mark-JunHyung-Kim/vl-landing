import React, { useRef, forwardRef } from 'react';
import {
    ChakraProvider,
    theme,
    Container,
    Flex,
    VStack,
    HStack,
    Heading,
    Text,
    Center,
    Image,
    Button,
    Circle,
    Box,
    Spacer,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faFaceGrin, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAndroid, faInstagram } from '@fortawesome/free-brands-svg-icons';

import QRCode from '../images/app-store-qr-code.png';

const Footer = () => {

    const today = new Date();
    const getYear = today.getFullYear();


    return (
        <Container
            maxWidth='100vw'
            height='200px'
            bg='rgba(255, 172, 152);'
        >
            <Container
                maxWidth='container.xl'
                height='full'
                color='white'

            >
                <VStack height='full' align='center' justify='space-evenly' padding={10}>
                    <HStack spacing={5}>
                        <a href='https://www.instagram.com/vanlife_app/' target='_blank'>
                            <Button
                                borderRadius='full'
                                width='50px'
                                height='50px'
                                colorScheme='pink'
                                // bgGradient='linear(to-br, pink.200, pink.600)'
                                color='white'
                                boxShadow='2px 2px 4px rgba(216, 68, 0, 0.4)'
                            >
                                <FontAwesomeIcon icon={faInstagram} fontSize='30px' />
                            </Button></a>
                        <a href='mailto:vancouver.life.app@gmail.com' target='_blank'>
                            <Button
                                borderRadius='full'
                                width='50px'
                                height='50px'
                                colorScheme='orange'                                
                                // bgGradient='linear(to-br, orange.200, orange.600)'
                                color='white'
                                boxShadow='2px 2px 4px rgba(216, 68, 0, 0.4)'
                            >
                                <FontAwesomeIcon icon={faEnvelope} fontSize='30px' />
                            </Button></a>
                    </HStack>
                    <Text>© {getYear} - KHSM Software Ltd. All rights reserved</Text>
                </VStack>

            </Container>
        </Container >
    );
};

export default Footer;
