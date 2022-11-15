import Head from 'next/head'
import HomePage from './homePage'
import { GetServerSideProps } from "next";
import { wrapper } from "../redux/store";

const Home = () => {

  return <div style={{height:"100%",display: "flex",flexDirection: "column",justifyContent: "space-evenly"}}>
    <Head>
      <title>Калькулятор</title>
      <meta name="title" content="Калькулятор"/>
    </Head>
    <HomePage/>
  </div>
}

export default Home;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ctx => {
  return {props:{}}
})