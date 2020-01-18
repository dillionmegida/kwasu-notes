import { useStaticQuery, graphql } from 'gatsby';

export default () => {
    const data = useStaticQuery(graphql`
        {
            allDirectory(filter: {relativeDirectory: {eq: ""}}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }      
    
    `)
    
    return data.allDirectory.edges.map(({node}) => (
        {
            id: node.id,
            name: node.name
        }
        ));
    }