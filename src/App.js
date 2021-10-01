import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'

function App() {
	const [form, handleChange] = useForm({ name: '', apellido: '' })

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
							value={form.name}
							onChange={handleChange}
						/>
					</form>
				</div>
			</Card>
		</Container>
	)
}

export default App
