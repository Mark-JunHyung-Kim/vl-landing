import React from 'react';
import { useState, useEffect } from 'react';
import {
    ChakraProvider,
    theme,
    Container,
    Divider,
    Flex,
    VStack,
    HStack,
    Heading,
    Text,
    Center,
    Image,
    Box,
    Tag,
} from '@chakra-ui/react';

import forumImg from '../images/forum.e9180901c35bfe3d2b33.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCircleInfo, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Page3 = () => {
    const [tags1, setTags1] = useState([
        '#김치부터_반찬까지',
        '#배달도_가능',
        '#의류와_악세사리',
        '#각종_클래스와_서비스품목',
        '#앱_내에서도_외에서도_연락가능!',
    ]);
    const [tags2, setTags2] = useState([
        '#콘서트',
        '#월드투어',
        '#서커스',
        '#시즌_페스티벌',
        '#같이.._갈.._사람이..',
    ]);
    const [tags3, setTags3] = useState([
        '#주제별_Top10',
        '#급하게_계획잡을때_딱이죠',
        '#몰랐던_유용한정보가_가득',
        '#키워드_제보받습니다',
        '#베스트는_10선까지만',
    ]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true,
    };

    return (
        <Container maxWidth='100vw' Height='100vh' bg='white'>
            <Container maxWidth='container.xl' padding={10}>
                <VStack w='full' align='center' justify='center'>
                    <HStack paddingTop={10} spacing={0} textShadow='2px 2px 4px rgba(216, 68, 0, 0.4)'>
                        <Heading
                            as='h1'
                            size='4xl'
                            fontWeight='extrabold'
                            color='orange.400'
                        >
                            유용한
                        </Heading>
                        <Heading
                            as='h1'
                            size='4xl'
                            fontWeight='extrabold'
                            color='orange.600'
                        >
                            &nbsp;생활정보가
                        </Heading>                        
                        <Heading
                            as='h1'
                            size='4xl'
                            fontWeight='extrabold'
                            color='orange.500'
                        >
                            &nbsp;가득
                        </Heading>                        
                    </HStack>
                    {/* <Heading as='h2' size='3xl' fontWeight='extrabold' color='orange.600'>
                        커뮤니티
                    </Heading> */}

                    <Slider {...settings}>
                        <Container maxWidth='full'>
                            <HStack width='full' className='1번영역'>
                                <Box
                                    w='full'
                                    h='full'
                                    align='center'
                                    justify='center'
                                    // bg='gray.400'
                                    borderRadius='lg'
                                >
                                    <Image
                                        src={forumImg}
                                        width='auto'
                                        height='600px'
                                        margin={10}
                                        objectFit='contain'
                                    ></Image>
                                </Box>
                                <VStack
                                    w='full'
                                    h='full'
                                    align='flex-start'
                                    justify='center'                                    
                                    spacing={5}
                                // bg='gray.400'
                                >
                                    <Heading
                                        as='h2'
                                        size='3xl'
                                        bgGradient='linear(to-l, #ff8243, #a16f5c)'
                                        bgClip='text'
                                    >
                                        {/* 커뮤니티 */}
                                        인스타마켓
                                        <span> </span>
                                        <FontAwesomeIcon icon={faInstagram} color='#f39566' />
                                    </Heading>
                                    <Heading as='h3' size='lg' fontWeight='extrabold'>
                                        다양한 한인 인스타 비지니스 정보
                                    </Heading>
                                    <Text fontSize='lg'>
                                        캐나다에서 한국 음식 / 물품이 그리워 울지마세요!
                                        <br /> 인스타 비지니스 마켓을 통해서라면 여기가 제2의 한국!
                                    </Text>
                                    <HStack spacing={3} display='inline-block' lineHeight={10}>
                                        {tags1.map((tag) => (
                                            <Tag
                                                size='md'
                                                key={tag}
                                                variant='solid'
                                                colorScheme='orange'
                                                isTruncated
                                            >
                                                {tag}
                                            </Tag>
                                        ))}
                                    </HStack>
                                </VStack>
                            </HStack>
                        </Container>

                        {/* 2번영역 */}
                        <Container maxWidth='full'>
                            <HStack width='full' className='2번영역'>
                                <Box
                                    w='full'
                                    h='full'
                                    align='center'
                                    justify='center'
                                    // bg='gray.600'
                                    borderRadius='lg'
                                >
                                    <Image
                                        src={forumImg}
                                        width='auto'
                                        height='600px'
                                        margin={10}
                                        objectFit='contain'
                                    ></Image>
                                </Box>
                                <VStack
                                    w='full'
                                    h='full'
                                    align='flex-start'
                                    justify='center'                                    
                                    spacing={5}
                                // bg='gray'
                                >
                                    <Heading
                                        as='h2'
                                        size='3xl'
                                        bgGradient='linear(to-l, #ff8243, #a16f5c)'
                                        bgClip='text'
                                    >
                                        {/* 커뮤니티 */}
                                        이벤트 & 공연
                                        <span> </span>
                                        <FontAwesomeIcon icon={faCalendarDays} color='#f39566'/>
                                    </Heading>
                                    <Heading as='h3' size='lg' fontWeight='extrabold'>
                                        현재 진행중인 이벤트 & 행사 & 공연들
                                    </Heading>
                                    <Text fontSize='lg'>
                                        다양한 민족이 많은 만큼, 각종 이벤트와 공연이 많다는것 알고계신가요?
                                        <br /> 현재 진행중이거나, 곧 진행 될 밴쿠버의 다양한 행사를 알아보세요!
                                    </Text>
                                    <HStack spacing={3} display='inline-block' lineHeight={10}>
                                        {tags2.map((tag) => (
                                            <Tag
                                                size='md'
                                                key={tag}
                                                variant='solid'
                                                colorScheme='orange'
                                                isTruncated
                                            >
                                                {tag}
                                            </Tag>
                                        ))}
                                    </HStack>
                                </VStack>
                            </HStack>
                        </Container>


                        {/* 3번영역 */}
                        <Container maxWidth='full'>
                            <HStack width='full' className='3번영역'>
                                <Box
                                    w='full'
                                    h='full'
                                    align='center'
                                    justify='center'
                                    // bg='gray.600'
                                    borderRadius='lg'
                                >
                                    <Image
                                        src={forumImg}
                                        width='auto'
                                        height='600px'
                                        margin={10}
                                        objectFit='contain'
                                    ></Image>
                                </Box>
                                <VStack
                                    w='full'
                                    h='full'
                                    align='flex-start'
                                    justify='center'                                    
                                    spacing={5}
                                // bg='gray'
                                >
                                    <Heading
                                        as='h2'
                                        size='3xl'
                                        bgGradient='linear(to-l, #ff8243, #a16f5c)'
                                        bgClip='text'
                                    >
                                        {/* 커뮤니티 */}
                                        밴쿠버 생활정보
                                        <span> </span>
                                        <FontAwesomeIcon icon={faCircleInfo} color='#f39566'/>
                                    </Heading>
                                    <Heading as='h3' size='lg' fontWeight='extrabold'>
                                        밴라에서 직접 정리하는 유용한 정보들
                                    </Heading>
                                    <Text fontSize='lg'>
                                        밴라 운영진이 직접 찾아보고 알뜰히 정리한 자료들
                                        <br />볼것도 많고 갈곳도 많은 밴쿠버에서, 알아두면 분명 쓸모가 있을꺼에요!
                                    </Text>
                                    <HStack spacing={3} display='inline-block' lineHeight={10}>
                                        {tags3.map((tag) => (
                                            <Tag
                                                size='md'
                                                key={tag}
                                                variant='solid'
                                                colorScheme='orange'
                                                isTruncated
                                            >
                                                {tag}
                                            </Tag>
                                        ))}
                                    </HStack>
                                </VStack>
                            </HStack>
                        </Container>






                    </Slider>
                </VStack>
            </Container>
        </Container>
    );
};

export default Page3;
