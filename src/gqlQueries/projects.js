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
				link
				tagsCollection {
					items {
						name
						color
					}
				}
			}
		}
	}
`

export default projectsQuery;