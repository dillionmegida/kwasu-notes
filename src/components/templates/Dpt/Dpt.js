import React from 'react';
import Styles from './Dpt.module.css';

import Layout from '../../Layout/Layout';
import Department from '../DptNotes/Department';
import { linkToText } from '../../../functions/links';
import AddNote from '../../AddNote';

export default props => {
    const dpt = props.dpt;
    const lvlsArr = props.lvlsArr;
    return (
        <Layout>
            <section className={Styles.Notes}>
                <h1>{linkToText(dpt)}</h1>
                {lvlsArr.sort().map((lvl, i) => (
                    <section key={i}>
                        <h2>{lvl} Level</h2>
                        <Department level={lvl} dpt={dpt}/>
                    </section>
                ))}
            </section>
            <AddNote />
        </Layout>
    )
}