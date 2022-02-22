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
import { faCommentDots, faUserGroup, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Page2 = () => {
    const [tags1, setTags1] = useState([
        '#파트타임_풀타임',
        '#저도일할수있나요?',
        '#망설이지말고_바로연락!',
        '#시급이_이렇게_쎄다고?..',
        '#사장님이_쉽고_일이_친절해요',
    ]);
    const [tags2, setTags2] = useState([
        '#운동좋아',
        '#음악좋아',
        '#게임좋아',
        '#오늘_당장_가능하세요?',
        '#5인큐_돌리실분?',
    ]);
    const [tags3, setTags3] = useState([
        '#밴쿠버_동네맛집',
        '#별점4.8이상',
        '#서비스쵝오',
        '#바로예약가능!',
        '#손님_주문이_터질거같아요ㅠ',
    ]);

    const pageTitles = ['자유게시판', '동호회 & 모임', '내돈내산 리뷰'];

    const [pageTitle, setPageTitle] = useState('자유게시판');

    let number = 0;

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        // 반대로
        rtl: true
    };

    return (
        <Container maxWidth='100vw' Height='100vh' bg='orange.50'>
            <Container maxWidth='container.xl' padding={10}>
                <VStack w='full' align='center' justify='center'>
                    <HStack paddingTop={10} spacing={0} textShadow='2px 2px 4px rgba(216, 68, 0, 0.4)'>
                        <Heading
                            as='h1'
                            size='4xl'
                            fontWeight='extrabold'
                            color='orange.400'
                        >
                            사고,
                        </Heading>
                        <Heading
                            as='h1'
                            size='4xl'
                            fontWeight='extrabold'
                            color='orange.500'
                        >
                            &nbsp;팔고,
                        </Heading>
                        <Heading
                            as='h1'
                            size='4xl'
                            fontWeight='extrabold'
                            color='orange.600'
                        >
                            &nbsp;구하고!
                        </Heading>
                    </HStack>
                    {/* <Heading as='h2' size='3xl' fontWeight='extrabold' color='orange.600'>
                        커뮤니티
                    </Heading> */}

                    <Slider {...settings}>
                        <Container maxWidth='full' >
                            <HStack width='full' className='1번영역' >
                                <VStack
                                    w='full'
                                    h='full'
                                    align='flex-end'
                                    justify='center'
                                    paddingLeft={10}
                                    spacing={5}
                                // bg='gray.400'
                                >
                                    <Heading
                                        as='h2'
                                        size='3xl'
                                        bgGradient='linear(to-l, #ff8243, #a16f5c)'
                                        bgClip='text'
                                    >
                                        구인 & 구직
                                        <span> </span>
                                        <FontAwesomeIcon icon={faCommentDots} color='#f39566' />
                                    </Heading>
                                    <Heading as='h3' size='lg' fontWeight='extrabold'>
                                        밴쿠버는 넓고, 일할곳은 많다!
                                    </Heading>
                                    <Text fontSize='lg' textAlign='right'>
                                        파트타임 & 풀타임 잡을 찾고있나요?
                                        <br />밴라 구인&구직란에서 나에게 딱 맞는 일자리를 찾아보세요!
                                    </Text>
                                    <HStack spacing={3} display='block' lineHeight={10} textAlign='right'>
                                        {tags1.map((tag) => (
                                            <Tag
                                                size='md'
                                                key={tag}
                                                variant='solid'
                                                colorScheme='teal'
                                                isTruncated
                                            >
                                                {tag}
                                            </Tag>
                                        ))}
                                    </HStack>
                                </VStack>
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
                            </HStack>
                        </Container>

                        {/* 2번영역 */}
                        <Container maxWidth='full'>
                            <HStack width='full' className='2번영역'>
                                <VStack
                                    w='full'
                                    h='full'
                                    align='flex-start'
                                    justify='center'
                                    paddingLeft={10}
                                    paddingRight={10}
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
                                        자유게시판
                                        <span> </span>
                                        <FontAwesomeIcon icon={faCommentDots} color='#f39566' />
                                    </Heading>
                                    <Heading as='h3' size='lg' fontWeight='extrabold'>
                                        소소한 일상부터 유용한 소식까지
                                    </Heading>
                                    <Text fontSize='lg'>
                                        오늘 하루 있었던일, 재미있는 사연, 웃긴이야기 등등
                                        <br /> 밴라에서라면 어떤 이야기라도 괜찮아요!
                                    </Text>
                                    <HStack spacing={3} display='block' lineHeight={10}>
                                        {tags1.map((tag) => (
                                            <Tag
                                                size='md'
                                                key={tag}
                                                variant='solid'
                                                colorScheme='teal'
                                                isTruncated
                                            >
                                                {tag}
                                            </Tag>
                                        ))}
                                    </HStack>
                                </VStack>
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
                            </HStack>
                        </Container>


                        {/* 3번영역 */}
                        <Container maxWidth='full'>
                            <HStack width='full' className='3번영역'>
                                <VStack
                                    w='full'
                                    h='full'
                                    align='flex-start'
                                    justify='center'
                                    paddingLeft={10}
                                    paddingRight={10}
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
                                        자유게시판
                                        <span> </span>
                                        <FontAwesomeIcon icon={faCommentDots} color='#f39566' />
                                    </Heading>
                                    <Heading as='h3' size='lg' fontWeight='extrabold'>
                                        소소한 일상부터 유용한 소식까지
                                    </Heading>
                                    <Text fontSize='lg'>
                                        오늘 하루 있었던일, 재미있는 사연, 웃긴이야기 등등
                                        <br /> 밴라에서라면 어떤 이야기라도 괜찮아요!
                                    </Text>
                                    <HStack spacing={3} display='inline-block' lineHeight={10}>
                                        {tags1.map((tag) => (
                                            <Tag
                                                size='md'
                                                key={tag}
                                                variant='solid'
                                                colorScheme='teal'
                                                isTruncated
                                            >
                                                {tag}
                                            </Tag>
                                        ))}
                                    </HStack>
                                </VStack>
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
                            </HStack>
                        </Container>






                    </Slider>
                </VStack>
            </Container>
        </Container>
    );
};

export default Page2;
