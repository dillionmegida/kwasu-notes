import React from 'react';
import Styles from './Department.module.css';

import { useStaticQuery, graphql, Link } from 'gatsby';
import { noteSlug, textToLink } from '../../../functions/links';
import AddNote from '../../AddNote';
import Helmet from '../../Helmet';
import kwasu from '../../../kwasu/details';

export default props => {
    const result = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            code
                            title
                            set
                            semester
                            lvl
                        }
                    }
                }
            }
            semesters: allMarkdownRemark(limit: 2000) {
                group(field: frontmatter___semester) {
                    fieldValue
                    edges {
                        node {
                            frontmatter {
                                code
                                set
                                title
                                dpt
                            }
                        }
                    }
                }
            }              
        }
    `)

    const { edges } = result.allMarkdownRemark;
    const { group: semGroup } = result.semesters;
    const lvl = props.level;
    const dpt = props.dpt;

    console.log(semGroup);

    const lvlDetails = edges.filter(({node}) => (
        node.frontmatter.lvl === lvl
    ))

    const sets = [];
    lvlDetails.forEach(({ node }) => (
        // ensure that the set is not already in the array
        !sets.includes(node.frontmatter.set) && sets.push(node.frontmatter.set)
    ))

    // this function seperates all posts (including all sets) into semesters
    const filterSem = (group, sem ) => (
        group.filter(({ fieldValue }) => (
            parseInt(fieldValue) === sem
        ))
    ) 

    const sem1 = filterSem(semGroup, 1);
    const sem2 = filterSem(semGroup, 2);

    const displaySem = (sem, set) => {
        return (
            <>
                <details className={Styles.Details}>
                    <summary>
                        <h5 className={Styles.Sem}>{sem === sem1 ? "1st" : "2nd"} Semester</h5>
                    </summary>
                    {sem.length > 0 ? (
                        <ul>
                            {sem.map(({ edges }) => (
                                edges.map(({ node }) => (
                                    // confirm the set because the semester that is returned is for all sets
                                    node.frontmatter.set === set && (
                                        <>
                                            <Helmet
                                                pageTitle = {`${kwasu.abbr} Notes for ${node.frontmatter.dpt} `}
                                            />
                                            <li>
                                                <Link
                                                    to={noteSlug(dpt, lvl, set, sem === sem1 ? 1 : 2, textToLink(node.frontmatter.code))}
                                                >
                                                    {node.frontmatter.code} - {node.frontmatter.title}
                                                </Link>
                                            </li>
                                        </>
                                    )
                                ))
                            ))}
                        </ul>
                    )
                    : (
                        <p>No notes have been uploaded for this semester!</p>
                    )}
                    
                </details>
            </>
        )
    }

    return (
        <>
            {
                sets.map(set => (
                    <div className={Styles.Set}>
                        <h4>{set}</h4>
                        {displaySem(sem1, set)}
                        {displaySem(sem2, set)}
                    </div>
                ))
            }
            <AddNote />
        </>
    )
}