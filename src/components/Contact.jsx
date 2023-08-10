import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { facebook, instagram, linkedin, telegram } from '../assets'

const Contact = () => {
	const formRef = useRef()
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [loading, setLoading] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target

		setForm({
			...form,
			[name]: value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setLoading(true)

		emailjs.send(
			import.meta.env.VITE_SERVICE_ID, 
			import.meta.env.VITE_TEMPLATE_ID,
			{
				from_name: form.name,
				to_name: 'Azat',
				from_email: form.email,
				to_email: import.meta.env.VITE_EMAIL,
				message: form.message
			},
			import.meta.env.VITE_PUBLIC_KEY
			)
			.then(() => {
				setLoading(false)
				alert('Thank you. I will get back to you as soon as possible.')

				setForm({
					name: '',
					email: '',
					message: '',
				})
			}, (error) => {
				setLoading(false)
				alert('Something went wrong')
				throw(error)
			})
	}

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-19 overflow-hidden">
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
			>
				<div className='flex justify-between'>
					<p className={styles.sectionSubText}>Get in touch</p>
					<div className='flex justify-between w-[180px]'>
						<a href="https://www.linkedin.com/in/azat-harutyunyan-831b1b218/" target="_blank"><img src={linkedin} alt="linkedin" className='w-[30px] h-[30px]' /></a>
						<a href="https://t.me/piejk" target="_blank"><img src={telegram} alt="telegram" className='w-[30px] h-[30px]' /></a>
						<a href="https://www.facebook.com/azat.harutyunyan.7545" target="_blank"><img src={facebook} alt="facebook" className='w-[30px] h-[30px]' /></a>
						<a href="https://www.instagram.com/harutyunyan_29_" target="_blank"><img src={instagram} alt="instagram" className='w-[30px] h-[30px]' /></a>
					</div>
				</div>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className='mt-12 flex flex-col gap-8'
				>

					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="text" 
							name="name"
							value={form.name}
							required
							onChange={handleChange}
							placeholder="What's your name?"
							className='bg-tertiary py-4 px-6
							placeholder:text-secondary
							text-white rounded-lg outlined-none
							border-none font-medium'
						/>
					</label>

					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							required
							onChange={handleChange}
							placeholder="What's your email?"
							className='bg-tertiary py-4 px-6
							placeholder:text-secondary
							text-white rounded-lg outlined-none
							border-none font-medium'
						/>
					</label>

					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message</span>
						<textarea
							rows='7'
							name="message"
							value={form.message}
							required
							onChange={handleChange}
							placeholder="What do you want to say?"
							className='bg-tertiary py-4 px-6
							placeholder:text-secondary
							text-white rounded-lg outlined-none
							border-none font-medium resize-none'
						/>					
					</label>

					<button
						type="submit"
						className='bg-tertiary py-3 px-8
						outline-none w-fit text-white
						font-bold shadow-md shadow-primary
						rounded-xl'
					>
						{loading ? 'Sending...' : 'Send'}
					</button>

				</form>

			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
			>
				<EarthCanvas />
			</motion.div>
		</div>
	)
}

export default SectionWrapper(Contact, 'contact')