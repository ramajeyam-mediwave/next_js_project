import Layout from '../component/layout/Layout';
import react, { useEffect, useState } from 'react';

import '../styles/theme.css';
import '../styles/TailwindUtlis.css';
import '../styles/globals.css';
import '../styles/TailwindUtlis.css';
import '../component/styles/ComponentStyle.css';
import { useRouter } from 'next/router';
import Script from 'next/script';
export default function App({ Component, pageProps }: any) {
  const location = useRouter();

  const InterViewexpireDate = '06/29/2023 08:59:00'; // mm/dd/yyyy

  return (
    <>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-CQHRN4H1XM'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CQHRN4H1XM');
      `}
      </Script>
      <div
        id='mv_theme'
        className={`mw-body  light ${
          location.asPath.includes('/ourteam/team') ? '' : ''
        }`}
      >
        <Layout InterViewexpireDate={InterViewexpireDate}>
          <Component {...pageProps} InterViewexpireDate={InterViewexpireDate} />
        </Layout>
      </div>
    </>
  );
}
