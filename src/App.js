import React from 'react';
import { useState, useEffect, useRef } from 'react';

import {
  ChakraProvider,
  // theme,
  Container,
  Flex,
  VStack,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

import Header from './components/header';
import Intro from './components/intro';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Footer from './components/footer';

import theme from './theme';
import '../src/theme/styles.css';

function App() {
  const [scrollStatus, setScrollStatus] = useState(false);

  // intro 에서 ref를 App으로 보낸걸 다시 header로 보내기 위함
  const introRef = useRef(null);

  const scrollListener = () => {
    if (window.scrollY === 0) {
      setScrollStatus(false);
    } else {
      setScrollStatus(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Header scrollStatus={scrollStatus} introTop={introRef} />
      {/* <Flex height='100vh' py={(0, 10, 20)} direction='column'> */}
      <Intro ref={introRef} />
      <Page1 />
      <Page2 />
      <Page3 />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
