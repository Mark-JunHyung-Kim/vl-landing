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

const Page1 = () => {
    const [communityTags1, setCommunityTags1] = useState([
        '#일상공유',
        '#웃긴얘기',
        '#빠른소식',
        '#익명가능',
        '#추천이_많으면_핫게로!',
    ]);
    const [communityTags2, setCommunityTags2] = useState([
        '#운동좋아',
        '#음악좋아',
        '#게임좋아',
        '#오늘_당장_가능하세요?',
        '#5인큐_돌리실분?',
    ]);
    const [communityTags3, setCommunityTags3] = useState([
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
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true,
    };

    /*    useEffect(() => {
           const contentsChanger = setInterval(() => {
               if (number === pageTitles.length) number = 0;
               setPageTitle(pageTitles[number]);
               number = number + 1;
               // setContentsNumber(contentsNumber + 1);
   
               console.log(number);
           }, 5000);
           return () => clearInterval(contentsChanger);
       }, []); */

    return (
        <Container maxWidth='100vw' Height='100vh' bg='white'>
            <Container maxWidth='container.xl' padding={10}>
                <VStack w='full' align='center' justify='center'>
                    <HStack paddingTop={10} spacing={0} textShadow='2px 2px 4px rgba(216, 68, 0, 0.4)'>
                        <Heading
                            as='h1'
                            size='4xl'
                            fontWeight='extrabold'
                            color='orange.600'
                        >
                            오늘,
                        </Heading>
                        <Heading
                            as='h1'
                            size='4xl'
                            fontWeight='extrabold'
                            color='orange.400'
                        >
                            &nbsp;어떠셨나요?
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
                                        {communityTags1.map((tag) => (
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
                                        동호회 & 모임
                                        <span> </span>
                                        <FontAwesomeIcon icon={faUserGroup} color='#f39566' fontSize='0.9em' />
                                    </Heading>
                                    <Heading as='h3' size='lg' fontWeight='extrabold'>
                                        같은 취미, 같은 관심사라면 언제나
                                    </Heading>
                                    <Text fontSize='lg'>
                                        함께하면 더 즐거운 취미생활부터 자기개발을 위한 공부까지
                                        <br /> 모임을 함께할 사람을 찾는다면 어떤 주제라도 좋아요!
                                    </Text>
                                    <HStack spacing={3} display='inline-block' lineHeight={10}>
                                        {communityTags2.map((tag) => (
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
                                        내돈내산 리뷰
                                        <span> </span>
                                        <FontAwesomeIcon icon={faMagnifyingGlassDollar} color='#f39566'/>
                                    </Heading>
                                    <Heading as='h3' size='lg' fontWeight='extrabold'>
                                        맛집, 서비스 리뷰가 궁금하다면 바로 검색!
                                    </Heading>
                                    <Text fontSize='lg'>
                                        오늘 가기로 한 그곳, 과연 얼마나 괜찮은 곳일까요?
                                        <br />직접 내가 보고 경험한 맛집, 별점도 확인하고 최고의 매장도 찾아보세요!
                                    </Text>
                                    <HStack spacing={3} display='inline-block' lineHeight={10}>
                                        {communityTags3.map((tag) => (
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
                            </HStack>
                        </Container>






                    </Slider>
                </VStack>
            </Container>
        </Container>
    );
};

export default Page1;
