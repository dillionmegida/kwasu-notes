import React from 'react';
import Styles from './Note.module.css';

import { graphql } from 'gatsby';
import Layout from '../../Layout/Layout';

export default ({ data }) => {
    const { markdownRemark: post } = data;
    const { frontmatter } = post;
    const { title, semester, set, lecturer } = frontmatter;
    return (
        <Layout>
            {/* <pre>
                {JSON.stringify(data, null, 2)}
            </pre> */}
            <div className={Styles.Info}>
              <h1>{title}</h1>
              <p>
                <b>Semester:</b> {semester === 1 ? "st" : "2nd"}
              </p>
              <p>
                <b>Set:</b> {set}
              </p>
              <p>
                <b>Lecturer:</b> {lecturer}
              </p>
              <p>
                <b>Resources: </b>
              </p>
              <ul className={Styles.Resources}>
                <li>Resource 1</li>
              </ul>
            </div>
            <div className={Styles.Content}>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      timeToRead
      frontmatter {
        title
        set
        semester
        lecturer
      }
    }
  }
`