import React from 'react';
import Styles from '../styles/about.module.css';

import Layout from '../components/Layout/Layout';
import kwasu from '../kwasu/details';

let About = () => {
    const { creator } = kwasu;

    return (
        <Layout>
            <main className={Styles.AboutSection}>
                <h1>About This Website</h1>
                <p>
                    This platform was created by <a href={creator.web}>{creator.name}</a>
                </p>
            </main>
        </Layout>
    )
};

export default About;