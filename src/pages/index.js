import React from 'react';
import Styles from '../styles/index.module.css';

import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { linkToText } from '../functions/links';
import AddNote from '../components/AddNote';
import departments from '../hooks/department-lists';
import Helmet from '../components/Helmet';
import kwasu from '../kwasu/details';

let Index = () => {
    const data = departments();
    console.log(data);
    return (
        <>
            <Helmet
                pageTitle = {`${kwasu.abbr} Notes`}
                pageDescription = {`${kwasu.abbr} Notes containing notes and resources in courses of various departments`}
            />
            <Layout>
                <main className={Styles.HomeSection}>
                    <h1>Notes</h1>
                    <h2>Departments</h2>
                    <ul>
                        {data.map((dpt) => (
                            <li key={dpt.id}>
                                <Link
                                    to={dpt.name}
                                >
                                    {linkToText(dpt.name)}
                                </Link>
                            </li>
                        ))}
                        
                    </ul>
                    <AddNote />
                </main>
            </Layout>
        </>
    );
}

export default Index;
