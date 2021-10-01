import { useState } from 'react'
import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

function App() {
	const [users, setUsers] = useState([])
	const [form, handleChange, resetForm] = useForm({ name: '', lastname: '', email: '' })

	const submit = (e) => {
		e.preventDefault()
		setUsers([...users, form])
		resetForm()
	}

	return (
		<div style={{ marginTop: '15%' }}>
			<Container>
				<Card>
					<div style={{ padding: 20 }}>
						<form onSubmit={submit}>
							<Input label="Nombre: " name="name" value={form.name} onChange={handleChange} />
							<Input label="Apellido: " name="lastname" value={form.lastname} onChange={handleChange} />
							<Input label="Correo: " name="email" value={form.email} onChange={handleChange} />
							<Button>Enviar</Button>
						</form>
					</div>
				</Card>
				<Card>
					<ul>
						{users.map((u) => (
							<li key={u.email}>{`${u.name} ${u.lastname} ${u.email}`}</li>
						))}
					</ul>
				</Card>
			</Container>
		</div>
	)
}

export default App
