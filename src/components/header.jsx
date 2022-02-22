import React from 'react';
import {
    ChakraProvider,
    theme,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Container,
    Flex,
    VStack,
    HStack,
    Spacer,
    Heading,
    Text,
    Button,
    Link,
    Image,
    Box,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';

import logo from '../images/Logo.png';

const Header = (props) => {
    const { scrollStatus, introTop } = props;

    const onHomeClick = () => {
        introTop.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Container
            maxWidth='100wh'
            padding={0}
            // bg='white'
            h='80px'
            pos='fixed'
            align='center'
            zIndex={100}
            className={scrollStatus ? 'overscroll' : 'firstpage'}
        >
            <Box
                pos='fixed'
                right='8vw'
                bottom='4vw'
                width='50px'
                height='50px'
                className={scrollStatus ? 'totopscroll' : 'totopfirstpage'}
            >
                <Button
                    borderRadius='full'
                    width='50px'
                    height='50px'
                    colorScheme='orange'
                    color='white'
                    boxShadow='2px 2px 4px rgba(216, 68, 0, 0.4)'
                    onClick={onHomeClick}
                >
                    <FontAwesomeIcon icon={faAnglesUp} fontSize='25px' />
                </Button>
            </Box>
            {/* <Container maxWidth='container.xl' p={0}> */}
            <Flex maxWidth='container.xl' h='full' align='center' p={10}>
                <HStack onClick={onHomeClick} cursor='pointer'>
                    <Image
                        borderRadius='full'
                        boxSize='50px'
                        src={logo}
                        bg='white'
                    // marginRight={1}
                    ></Image>
                    <Heading as='h4' size='md' className='appname'>
                        {scrollStatus ? '밴쿠버라이프' : '밴쿠버라이프'}
                    </Heading>
                </HStack>
                <Spacer />
                <Link m={10} fontWeight='semibold'>
                    About Us
                </Link>
                {/* <Button colorScheme={scrollStatus ? 'red' : 'orange'} variant='solid' className='button'>
                    앱 다운로드
                </Button> */}
                <Menu>
                    <MenuButton
                        as={Button}
                        colorScheme='red'
                        rightIcon={<FontAwesomeIcon icon={faDownload} />}
                    >
                        앱 다운로드
                    </MenuButton>
                    <MenuList>
                        <a href='http://onelink.to/eyqznm' target='_blank'>
                            <MenuItem minH='40px' color='blue.400'>
                                <Box width='40px' textAlign='center'>
                                    <FontAwesomeIcon icon={faApple} fontSize='30px' />
                                </Box>
                                <Box>iOS 다운로드</Box>
                            </MenuItem>
                        </a>
                        <a href='http://onelink.to/eyqznm' target='_blank'>
                            <MenuItem minH='40px' color='green.400'>
                                <Box width='40px' textAlign='center'>
                                    <FontAwesomeIcon icon={faAndroid} fontSize='25px' />
                                </Box>
                                <Box>Android 다운로드</Box>
                            </MenuItem>
                        </a>
                    </MenuList>
                </Menu>
            </Flex>
            {/* </Container> */}
        </Container >
    );
};

export default Header;
