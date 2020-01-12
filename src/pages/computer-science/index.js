import React from 'react';
import Styles from './index.module.css';

import Layout from '../../components/Layout/Layout';
import Department from '../../components/templates/Deparment/Department';

export default () => {
    return (
        <Layout>
            <main className={Styles.Notes}>
                <h1>Computer Science</h1>
                <section>
                    <h2>400 Level</h2>
                    <Department level={400} dpt='computer-science'/>
                </section>
            </main>
        </Layout>
    )
}