import React from 'react';
import { Helmet } from 'react-helmet';
import Brainstorm from '../components/Brainstorm/Brainstorm';
import CustomPage from '../components/CustomPage';
import Goal from '../components/goal/Goal';
import Hero from '../components/Hero/Hero';
import Values from '../components/values/Values';
import SubscriptionForm from '../components/waitlist/WaitListForm';

const HomePage = () => {
  return (
    <CustomPage>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TryBidhaa</title>
        <link rel="canonical" href="http://trybidhaa.com" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00a300" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Hero />
      <Brainstorm />
      <Goal />
      <Values />
      {/* <div className="py-16">
        <ProductX />
        <Market />
      </div> */}
      <SubscriptionForm />
    </CustomPage>
  );
};

export default HomePage;
