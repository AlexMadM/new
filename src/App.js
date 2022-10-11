import './App.css';
import {Component} from "react";
import CardList from "./Components/card-list/card-list.component";
import SearchBox from "./Components/search-box/search-box.component";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ''
        };

    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users').then(
            (response) => response.json()).then((users) => this.setState(() => {
            return {monsters: users};
        }, () => (console.log((this.state)))))
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return {searchField};
        })
    }

    render() {
        const {monsters, searchField} = this.state;
        const {onSearchChange} = this;
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
        console.log(filteredMonsters)

        return (
            <div className='App'>
                <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' />

                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}


export default App;
