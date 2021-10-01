import { useState } from 'react'

const useForm = (inicial) => {
	const [form, setForm] = useState(inicial)

	const handleChange = ({ target }) => {
		setForm({ ...form, [target.name]: target.value })
	}

	return [form, handleChange]
}

export default useForm
