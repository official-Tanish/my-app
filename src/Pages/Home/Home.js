import React from 'react'
import Layout from "../../component/Layout/Layout";
import "../../styles/HomeStyle.css";
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';

function Home() {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <Section1 />
        {/* {Home section About} */}
        <Section2 />
        {/* {home section menu} */}
        <Section3 />
        {/* {promotions} */}
        <Section4 />
        {/* {Shop} */}
        <Section5 />
{/* {Testimonials} */}
        <Section6/>
        <Section7/>
      </Layout>
    </>
  );
}
export default Home;