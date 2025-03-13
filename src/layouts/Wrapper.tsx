'use client';

import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { animationCreate } from '@/libs/utils/utils';
import ScrollToTop from '@/components/examples/common/ScrollToTop';
import Header from './use/headers/Header';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap');
}

const Wrapper = ({ children }: any) => {
  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <Header style_1={true} style_2={false} /> */}
      {children}
      <ScrollToTop />
      <ToastContainer position="top-center" />
    </>
  );
};

export default Wrapper;
