import React from 'react';
import Styles from '../styles/about.module.css';

import Layout from '../components/Layout/Layout';
import kwasu from '../kwasu/details';
import AddNote from '../components/AddNote';

let About = () => {
    const { creator } = kwasu;

    return (
        <Layout>
            <main className={Styles.AboutSection}>
                <h1>About This Website</h1>
                <p>
                    This platform was created by <a href={creator.web}>{creator.name}</a>, a student of Computer Science of 2019-2020 set. The purpose of this is to share notes easily among students such that at any time, they can access it.
                </p>
                <p>
                    Also, for studying purposes, you can check out other sets' notes (if available) to learn more about a course.
                </p>
                <p>
                    You could also check out the <a href={kwasu.creator.repo}>GitHub repository on GitHub</a> for any contributions or to report any issue.
                </p>
                <AddNote />
            </main>
        </Layout>
    )
};

export default About;