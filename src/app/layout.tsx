'use client';

import '../styles/index.scss';
import Script from 'next/script';
import { Provider } from 'react-redux';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
// import { GoogleAnalytics } from '@next/third-parties/google'

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
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-74ES17K0X0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-74ES17K0X0');
          `}
        </Script>

        {/* Google Analytics Script Account rusdifazan@gmail.com*/}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3QHBXTFPLF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3QHBXTFPLF');
          `}
        </Script>

        {/* Meta Script */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2949984038727465');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* Meta Script */}

        <meta
          name="keywords"
          content="workspace jabodetabek, jll, regus, property, office, office space, jabodetabek,coworking space jakarta"
        />
        {/* <meta name="description" content="master property in jabodetabek" /> */}
        <meta property="og:site_name" content="office, workspace jabodetabek" />
        <meta property="og:url" content="https://jardineasiapasific.asia" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jardine Asiapasific" />
        <meta name="robots" content="index, follow" />
        {/* <meta name="og:image" content="images/assets/ogg.png" /> */}
        {/* For IE  */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* For Resposive Device */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KW8V6BHQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Meta Script */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2949984038727465&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* Meta Script */}

        <div className="main-page-wrapper">
          <Provider store={store}>
            <Header />
            {children}
            <Analytics />
            <SpeedInsights />
            {/* <Footer /> */}
          </Provider>
        </div>
      </body>
    </html>
  );


        
}
