import { gql } from "@apollo/client";

const projectsQuery = gql`
	{
		projectsCollection {
			items {
				name
				description
				image {
					url
				}
				githubLink
				tagsCollection {
					items {
						name
						color
					}
				}
				deployLink
			}
		}
	}
`

export default projectsQuery;