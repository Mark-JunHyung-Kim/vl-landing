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
import { faDownload, faFaceGrin } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';

import image1 from '../images/test1.png';

import QRCode from '../images/app-store-qr-code.png';

// 팝업 설명용
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'


// 이미지 캐러셀용 Swiper 라이브러리
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper';

const Intro = forwardRef((props, ref) => {



    return (
        <Container
            maxWidth='100vw'
            height='full'
            paddingTop='80px'
            bgGradient='linear(to-tr, white, orange.100)'

            ref={ref}
        >
            <Container
                maxWidth='container.xl'
                padding={10}
                paddingTop={20}
                paddingBottom={20}
            >
                <HStack w='full'>
                    <VStack
                        w='80%'
                        h='full'
                        align='flex-start'
                        justify='center'
                        paddingLeft={10}
                        paddingRight={10}
                        spacing={5}
                    >
                        <Heading
                            as='h3'
                            size='lg'
                            fontWeight='extrabold'
                            color='orange.500'
                            textShadow='1px 1px 2px rgba(216, 68, 0, 0.4)'
                        >
                            밴쿠버 한인들의 소셜 커뮤니티
                        </Heading>
                        <Heading
                            as='h1'
                            size='4xl'
                            bgGradient='linear(to-l, #ffa07b, #d33232)'
                            bgClip='text'
                            textShadow='4px 4px 6px rgba(216, 68, 0, 0.4)'
                        >
                            밴쿠버라이프
                        </Heading>
                        <Heading as='h4' size='md' color='orange.400'>
                            함께 소통하고 즐겨요&nbsp;
                            <FontAwesomeIcon icon={faFaceGrin} fontSize='25px' />
                            <br />
                            나의 일상이 밴쿠버의 소중한 내일이 되는 곳!
                        </Heading>
                        <HStack width='full' spacing={5} justify='center' paddingRight={10}>
                            {/* 팝업설명용 */}
                            <Popover zIndex='0'>
                                <PopoverTrigger>
                                    <Button colorScheme='orange' >지금 다운로드하세요!</Button>
                                </PopoverTrigger>
                                <PopoverContent bg='orange.50' border='2px solid' borderColor='orange.400' color='orange.500'>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader fontWeight='semibold' align='center'>다운로드 방법이 궁금하신가요?</PopoverHeader>
                                    <PopoverBody align='center'>사용중인 모바일폰에서<br />기종에 맞는 버튼을 터치하거나<br />QR코드를 리딩해주세요!</PopoverBody>
                                </PopoverContent>
                            </Popover>
                            <a href='http://onelink.to/eyqznm' target='_blank'>
                                <Button
                                    borderRadius='full'
                                    width='50px'
                                    height='50px'
                                    colorScheme='blue'
                                    color='white'
                                    boxShadow='2px 2px 4px rgba(216, 68, 0, 0.4)'
                                >
                                    <FontAwesomeIcon icon={faApple} fontSize='30px' />
                                </Button></a>
                            <a href='http://onelink.to/eyqznm' target='_blank'>
                                <Button
                                    borderRadius='full'
                                    width='50px'
                                    height='50px'
                                    colorScheme='green'
                                    color='white'
                                    boxShadow='2px 2px 4px rgba(216, 68, 0, 0.4)'
                                >
                                    <FontAwesomeIcon icon={faAndroid} fontSize='25px' />
                                </Button>
                            </a>
                            <Box
                                width='80px'
                                height='auto'
                                boxShadow='2px 2px 4px rgba(216, 68, 0, 0.4)'
                            >
                                <Image src={QRCode} objectFit='contain'></Image>
                            </Box>
                        </HStack>
                    </VStack>
                    <VStack
                        w='full'
                        h='full'
                        alignItems='center'
                        justify='center'
                        paddingLeft={10}
                        paddingRight={10}
                        zIndex={0}
                    // bg='gray.50'
                    >
                        {/* <Image src={image1} height='600px' margin={10}></Image> */}

                        <Swiper
                            roundLengths='true'
                            autoplay={{
                                delay: 3000,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false
                            }}

                            loop='true'
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: -20,
                                stretch: 300,
                                depth: 400,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            pagination={false}
                            modules={[EffectCoverflow, Pagination, Autoplay]}
                            className='mySwiper'
                        >
                            <SwiperSlide align='center'>
                                <img src={image1} width='250px' />
                            </SwiperSlide>
                            <SwiperSlide align='center'>
                                <img src={image1} width='250px' />
                            </SwiperSlide>
                            <SwiperSlide align='center'>
                                <img src={image1} width='250px' />
                            </SwiperSlide>
                            <SwiperSlide align='center'>
                                <img src={image1} width='250px' />
                            </SwiperSlide>
                            <SwiperSlide align='center'>
                                <img src={image1} width='250px' />
                            </SwiperSlide>
                        </Swiper>
                    </VStack>
                </HStack>
            </Container>
        </Container>
    );
});

export default Intro;
