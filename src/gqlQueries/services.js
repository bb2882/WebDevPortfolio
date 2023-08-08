import { gql } from "@apollo/client";

const servicesQuery = gql`
	{
		servicesCollection {
			items {
				title
				icon {
					url
				}
			}
		}
	}
`

export default servicesQuery;