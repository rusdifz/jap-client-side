'use client';

import '../styles/index.scss';
import { Provider } from 'react-redux';
import { Analytics } from '@vercel/analytics/next';

import store from '@/redux/store';
import Header from '@/layouts/headers';
// import Footer from '@/layouts/footers/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta
          name="keywords"
          content="Workspace, workspace jabodetabek, jll, regus, property, office"
        />
        <meta name="description" content="master property in jabodetabek" />
        <meta property="og:site_name" content="Office" />
        <meta property="og:url" content="https://jardineasiapasific.asia" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jardine Asiapasific" />
        {/* <meta name="og:image" content="images/assets/ogg.png" /> */}
        {/* For IE  */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* For Resposive Device */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* For Window Tab Color */}
        {/* Chrome, Firefox OS and Opera */}
        <meta name="theme-color" content="#0D1A1C" />
        {/* Windows Phone */}
        <meta name="msapplication-navbutton-color" content="#0D1A1C" />
        {/* iOS Safari */}
        <meta name="apple-mobile-web-app-status-bar-style" content="#0D1A1C" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <div className="main-page-wrapper">
          <Provider store={store}>
            <Header />
            {children}
            <Analytics />
            {/* <Footer /> */}
          </Provider>
        </div>
      </body>
    </html>
  );
}
