import React from 'react';
import Styles from '../styles/404.module.css';

import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';

let ErrorPage = () => (
    <Layout>
        <main className={Styles.ErrorSection}>
            <h1>
                Egbon,
            </h1>
            <h2>Ibi yi kosi rara  <span role='img' aria-label='Dissapointed face'>😞</span>  </h2>
            <p><i>Translation: </i>This page does not exist!</p>
            <Link
                to='/'
            >
               &larr; Go To Homepage
            </Link>
        </main>
    </Layout>
);

export default ErrorPage;