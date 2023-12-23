import Filterlist from "./components/ui/lists/Filterlist/Filterlist"

const testData = [
	{name: 'Все'},
	{name: 'Xbox'},
	{name: 'PS'},
	{name: 'Windows'},
	{name: 'Linux'},
	{name: 'Mac'},
	{name: 'Android'}
]

function App() {
	return (
		<>
			<Filterlist names={testData}/>
			<Filterlist names={testData}/>
			<Filterlist names={testData}/>
			<Filterlist names={testData}/>
			<Filterlist names={testData}/>
			<Filterlist names={testData}/>
		</>

	)
}

export default App
