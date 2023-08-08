import { useRouter } from 'next/router'

export default function ActivationTokenPage() {
	const router = useRouter()
	const { activationToken } = router.query

	if (activationToken)
		return (
			<>
				{activationToken ? (
					<div>
						<h1>Activation Page</h1>
						<p>Activation Token: {activationToken}</p>
						{/* You can add more JSX elements and logic here */}
					</div>
				) : (
					'error'
				)}
			</>
		)
}
