import React, { Fragment } from 'react';
import Styles from './index.module.css';

import { Link, useStaticQuery, graphql } from 'gatsby';
import { _400 } from '../../kwasu/departments/computer-science';
import Layout from '../../components/Layout/Layout';

export default () => {
    const objKeys = Object.keys(_400);
    return (
        <Layout>
            <main className={Styles.Notes}>
                <h3>400 Level</h3>
                {
                    objKeys.map(set => {
                        const semObj = Object.keys(_400[set]);
                        return (
                            <Fragment key={set}>
                                <h4>{set}</h4>
                                <ul>
                                    {
                                        semObj.map((sem, i) => {
                                            console.log(semObj);
                                            return (
                                                <Fragment key={i}>
                                                    <li>{sem}{sem === '1' ? 'st' : 'nd'} Semester</li>
                                                    <ul>
                                                        {
                                                            _400[set][sem].map(c => (
                                                                <Link
                                                                    to={c.link}
                                                                    title={c.course}
                                                                >
                                                                    {c.code}
                                                                </Link>
                                                            ))
                                                        }
                                                    </ul>
                                                </Fragment>
                                            )
                                        })
                                    }
                                </ul>
                            </Fragment>
                        )
                    })
                }
            </main>
        </Layout>
    )
}