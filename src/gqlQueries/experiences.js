import { gql } from "@apollo/client";

const experiencesQuery = gql`
	{
		experiencesCollection {
			items {
				title
				icon {
					url
				}
				iconBg
				points
			}
		}
	}
`

export default experiencesQuery;