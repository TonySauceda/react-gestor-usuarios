import useForm from './hooks/useForm'
import Input from './components/Input'

function App() {
	const [form, handleChange] = useForm({ name: '', apellido: '' })

	console.log(form)
	return (
		<form>
			<Input label="Nombre: " name="name" placeholder="Nombre" value={form.name} onChange={handleChange} />
			<Input label="Apellido: " name="lastname" placeholder="Apellido" value={form.name} onChange={handleChange} />
		</form>
	)
}

export default App
