import React from 'react'
import { BallCanvas } from "./canvas"
import { SectionWrapper } from '../hoc'
import technologiesQuery from '../gqlQueries/technologies';
import { useQuery } from '@apollo/client';

const Tech = () => {
	const { loading, error, data } = useQuery(technologiesQuery)

	if (error) throw error

	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">

			{loading ? <p></p> : (
				data.technologiesCollection.items.map(technology => (
					<div className="w-28 h-28" key={technology.name}>
						<BallCanvas icon={technology.icon.url} />
					</div>
				))
			)}
		</div>
    )
}

export default SectionWrapper(Tech, '')