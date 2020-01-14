import React from 'react';
import Styles from './Note.module.css';

import { graphql, Link } from 'gatsby';
import Layout from '../../Layout/Layout';
import { textToLink } from '../../../functions/links';
import Helmet from '../../Helmet';
import kwasu from '../../../kwasu/details';

export default ({ data }) => {
    const { markdownRemark: post } = data;
    const { frontmatter } = post;
    const { title, dpt, semester, set, lecturer, resources } = frontmatter;

    const dptLink = textToLink(dpt);
    return (
        <>
          <Helmet
            pageTitle = {`${title} | ${dpt} Department - ${kwasu.abbr} Notes`}
          />
          <Layout>
            {/* <pre>
                {JSON.stringify(data, null, 2)}
            </pre> */}
            <div className={Styles.Info}>
              <Link
                to={dptLink}
              >
                &larr; Go To Notes
              </Link>
              <h1>{title}</h1>
              <p>
                <b>Department:</b> {dpt}
              </p>
              <p>
                <b>Set:</b> {set}
              </p>
              <p>
                <b>Semester:</b> {semester === 1 ? "1st" : "2nd"}
              </p>
              
              <p>
                <b>Lecturer:</b> {lecturer}
              </p>
              {resources !== undefined && resources !== null && (
                <>
                  <p>
                    <b>Resources: </b>
                  </p>
                  <ul className={Styles.Resources}>
                    {resources.map((r, i) => (
                      <li key={`${r.name}_${i}`}>
                        <a href={r.link}>{r.name}</a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className={Styles.Content}>
              <p><em>Some Jottings...</em></p>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
        </>
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
        dpt
        resources {
          name
          link
        }
      }
    }
  }
`