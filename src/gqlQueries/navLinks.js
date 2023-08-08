import { gql } from "@apollo/client";

const navLinks = gql`
	{
		navLinksCollection {
		items {
				title
				id
			}
		}
	}
`

export default navLinks;