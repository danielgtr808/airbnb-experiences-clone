import Card from './components/card/card.component'
import Hero from './components/hero/hero.component'
import Navbar from './components/navbar/navbar.component'

function App() {
    return (
        <div className="App">
            <Navbar/>
            <main>
                <Hero/>
                <div className="cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main>
        </div>
    );
}

export default App;
