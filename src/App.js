import './App.css';
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField:''
        };

    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users').then(
            (response) => response.json()).then((users) => this.setState(() => {
            return {monsters: users};
        }, () => (console.log((this.state)))))
    }

    render() {
        const filteredMonsters = this.state.monsters.filter((monster) => {
            return  monster.name.toLocaleLowerCase().includes(this.state.searchField);
        });
        return (
            <div className='App'>
                <input className='search-box' type='search' placeholder='search monsters'
                       onChange={(event) => {
                           console.log(event.target.value);
                           const searchField = event.target.value.toLocaleLowerCase();
                           this.setState(() => {
                               return {searchField};
                           })
                       }}/>

                {filteredMonsters.map((monster) => {
                    return (
                        <div key={monster.id}>
                            <h1>{monster.name}</h1>
                        </div>
                    );
                })}
            </div>
        );
    }
}


export default App;
