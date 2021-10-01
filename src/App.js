import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

function App() {
	const [form, handleChange] = useForm({ name: '', lastname: '', email: '' })

	console.log(form)
	return (
		<Container>
			<Card>
				<div style={{ padding: 20 }}>
					<form>
						<Input label="Nombre: " name="name" placeholder="Nombre" value={form.name} onChange={handleChange} />
						<Input
							label="Apellido: "
							name="lastname"
							placeholder="Apellido"
							value={form.lastname}
							onChange={handleChange}
						/>
						<Input label="Correo: " name="email" placeholder="Correo" value={form.email} onChange={handleChange} />
						<Button>Enviar</Button>
					</form>
				</div>
			</Card>
		</Container>
	)
}

export default App
