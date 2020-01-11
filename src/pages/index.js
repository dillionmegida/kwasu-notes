import React from 'react';
import Styles from '../styles/index.module.css';

import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import departments from '../kwasu/department-lists';

let Index = () => (
    <Layout>
        <main className={Styles.HomeSection}>
            <h1>Notes</h1>
            <h2>Departments</h2>
            <ul>
                {
                    departments.map((d, i) => (
                        <li key={`${d.name}_${i}`}>
                            <Link
                                to={d.link}
                                title={`${d.name} Department`}
                            >
                                Computer Science
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </main>
    </Layout>
);

export default Index;
