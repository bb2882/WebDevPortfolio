import { gql } from "@apollo/client";

const technologiesQuery = gql`
	{
		technologiesCollection {
			items {
				name
				icon {
					url
				}
			}
		}
	}
`

export default technologiesQuery;