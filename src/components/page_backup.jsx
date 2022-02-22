import React from 'react';
import { useState, useEffect } from 'react';
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
    Box,
    Tag,
} from '@chakra-ui/react';

import forumImg from '../images/forum.e9180901c35bfe3d2b33.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Page1 = () => {
    const [communityTags, setCommunityTags] = useState([
        '#일상공유',
        '#웃긴얘기',
        '#빠른소식',
        '#익명가능',
        '#추천이_많으면_핫게로!',
    ]);

    const pageTitles = ['자유게시판', '동호회 & 모임', '내돈내산 리뷰'];

    const [pageTitle, setPageTitle] = useState('자유게시판');

    let number = 0;

    useEffect(() => {

        const contentsChanger = setInterval(() => {
            if (number === pageTitles.length)
                number = 0;
            setPageTitle(pageTitles[number]);
            number = number + 1;
            // setContentsNumber(contentsNumber + 1);

            console.log(number);
        }, 1000);
        return () => clearInterval(contentsChanger)
    }, []);


    return (
        <Container maxWidth='100vw' bg='white'>
            <Container maxWidth='container.xl' padding={10}>
                <VStack w='full' align='center' justify='center'>
                    <HStack padding={10} spacing={0}>
                        <Heading as='h2' size='3xl' fontWeight='extrabold' color='orange.600'>
                            오늘
                        </Heading>
                        <Heading as='h2' size='3xl' fontWeight='extrabold' color='orange.400'>
                            은 어떠셨어요?
                        </Heading>
                    </HStack>
                    {/* <Heading as='h2' size='3xl' fontWeight='extrabold' color='orange.600'>
                        커뮤니티
                    </Heading> */}





                    <HStack w='full' className='테스트'>
                        <Box
                            w='full'
                            h='full'
                            align='center'
                            justify='center'
                            paddingLeft={10}
                            paddingRight={10}
                            spacing={5}
                            // bg='gray.600'
                            borderRadius='lg'
                        >
                            <Image src={forumImg} height='600px' margin={10}></Image>
                        </Box>
                        <VStack
                            w='full'
                            h='full'
                            align='flex-start'
                            justify='center'
                            paddingLeft={10}
                            paddingRight={10}
                            spacing={5}
                        >
                            <Heading
                                as='h2'
                                size='3xl'
                                bgGradient='linear(to-l, #ff8243, #a16f5c)'
                                bgClip='text'
                            >
                                {/* 커뮤니티 */}
                                {pageTitle}
                                <span> </span>
                                <FontAwesomeIcon icon={faCommentDots} color='#ff8243' />
                            </Heading>
                            <Heading as='h3' size='lg' fontWeight='extrabold'>
                                소소한 일상부터 유용한 소식까지
                            </Heading>
                            <Text fontSize='lg'>
                                오늘 하루 있었던일, 재미있는 사연, 웃긴이야기 등등
                                <br /> 밴라에서라면 어떤 이야기라도 괜찮아요!
                            </Text>
                            <HStack spacing={3}>
                                {communityTags.map((tag) => (
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
















                </VStack>
            </Container>
        </Container>
    );
};

export default Page1;
