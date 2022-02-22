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
import { faCommentDots, faHammer, faHouseChimneyUser, faCommentDollar } from '@fortawesome/free-solid-svg-icons';

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
        '#홈스테이',
        '#렌트',
        '#지역별_금액별_기간별',
        '#룸쉐어도_가능!',
        '#역세권_슬세권_학세권',
    ]);
    const [tags3, setTags3] = useState([
        '#한국용품_팝니다',
        '#$1부터도_가능해요',
        '#한국_귀국기념_무빙세일!',
        '#아니_명품이_이가격이라고?',
        '#얼마까지_알아보고_오셨어요?',
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
        // 반대로
        // rtl: true
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
                            &nbsp;구하고
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
                                        <FontAwesomeIcon icon={faHammer} color='#f39566' />
                                    </Heading>
                                    <Heading as='h3' size='lg' fontWeight='extrabold'>
                                        밴쿠버는 넓고, 일할곳은 많다!
                                    </Heading>
                                    <Text fontSize='lg' textAlign='right'>
                                        파트타임 & 풀타임 잡을 찾고있나요?
                                        <br />밴라 구인&구직란에서 나에게 딱 맞는 일자리를 찾아보세요!
                                    </Text>
                                    <HStack spacing={3} display='block' lineHeight={10} textAlign='right'>
                                        {tags2.map((tag) => (
                                            <Tag
                                                size='md'
                                                key={tag}
                                                variant='solid'
                                                colorScheme='blue'
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
                                    align='flex-end'
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
                                        렌트&홈스테이
                                        <span> </span>
                                        <FontAwesomeIcon icon={faHouseChimneyUser} color='#f39566' />
                                    </Heading>
                                    <Heading as='h3' size='lg' fontWeight='extrabold'>
                                        내가 살 수 있는곳은 어디일까?
                                    </Heading>
                                    <Text fontSize='lg' textAlign='right'>
                                        학생을 위한 단기 홈스테이도, 옵션마다 천차만별인거 아시나요?
                                        <br />지역 / 금액별 나에게 딱 맞는 집을 찾아보세요!
                                    </Text>
                                    <HStack spacing={3} display='block' lineHeight={10} textAlign='right'>
                                        {tags2.map((tag) => (
                                            <Tag
                                                size='md'
                                                key={tag}
                                                variant='solid'
                                                colorScheme='blue'
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
                                    align='flex-end'
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
                                        벼룩시장
                                        <span> </span>
                                        <FontAwesomeIcon icon={faCommentDollar} color='#f39566' />
                                    </Heading>
                                    <Heading as='h3' size='lg' fontWeight='extrabold'>
                                        남는것은 팔고, 없는것은 구하고
                                    </Heading>
                                    <Text fontSize='lg' textAlign='right'>
                                        $1부터 살수있는 일상품목도 찾을 수 있고
                                        <br />운이 좋다면 번쩍거리는 명품도 찾을수 있을거에요!
                                    </Text>
                                    <HStack spacing={3} display='block' lineHeight={10} textAlign='right'>
                                        {tags3.map((tag) => (
                                            <Tag
                                                size='md'
                                                key={tag}
                                                variant='solid'
                                                colorScheme='blue'
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
