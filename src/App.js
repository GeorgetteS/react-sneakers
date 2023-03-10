import './App.css';
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
	return (
		<div className="wrapper clear">

			<Drawer/>

			<Header/>


			<div className='container'>

				<div className="content d-flex justify-between align-center mb-40">

					<h1>Все кроссовки</h1>
					<div className="search-block d-flex">
						<img src="img/search.png" alt="Search" />
						<input type="text" placeholder='Поиск...' />
					</div>
				</div >
				<div className='d-flex '>
					<Card />
					<Card />
					<Card />
					<Card />

				</div >
			</div >
		</div>
	);
}

export default App;
