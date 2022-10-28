import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Button } from 'antd';
import { Container } from '@mui/material';
import styles from '../assets/styles/scss/main.module.scss';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { useGetProductsQuery } from "../store/reducers/itemSlice";
import Header from "../components/Header/Header"
import MainPageProductSlider from "../components/sections/MainPageProductSlider/MainPageProductSlider"
import Navbar from "../components/Header/Navbar/Navbar"

const Home: NextPage = () => {
    const dispatch = useAppDispatch();
    // const count = useAppSelector(selectCount);

    const {
        data, error, isLoading
      }  = useGetProductsQuery();

  const  product = data?.products?.slice(0,1)
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
<Container>
<Header product={product}

/>
<MainPageProductSlider/>
</Container>

        </div>
    );
};

export default Home;