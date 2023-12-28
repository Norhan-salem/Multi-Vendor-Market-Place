import React, { useState } from "react";
import axios from 'axios';
import '../Search/Search.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark  } from '@fortawesome/free-regular-svg-icons';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";



const Search = () => {
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // testing using dummy data :)
    const handleInputChange = async (event) => {
        setInput(event.target.value);
    
        // This is some dummy data
        const dummyData = ['Phone', 'tiva', 'wires'];

            // Filter the dummy data based on the input
        const filteredData = dummyData.filter(item =>
                item.toLowerCase().startsWith(event.target.value.toLowerCase())
            );
    
        // Update the suggestions state with the dummy data
        setSuggestions(filteredData);

            // Log the current state to the console
            console.log('Input:', event.target.value);
            console.log('Suggestions:', filteredData);
    };

    // placeholder data
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];
    const mostSearchedItems1 = items.slice(0, 5);
    const mostSearchedItems2 = items.slice(5);
    const Keywords = ['Keyword 1', 'Keyword 2', 'Keyword 3', 'Keyword 4', 'Keyword 5', 'Keyword 6'
                        , 'Keyword 7', 'Keyword 8', 'Keyword 9', 'Keyword 10'];
    const mostUsedKeywords1 = Keywords.slice(0, 5);
    const mostUsedKeywords2 = Keywords.slice(5);
    
   /* const handleInputChange = async (event) => {
        setInput(event.target.value);

        // Make a request to the backend API with the current input
        const response = await axios.get(`BACKEND_API_URL/Search?query=${input}`);

        // Update the suggestions state with the received data
        setSuggestions(response.data);
    };*/

    return (
        <>
        <Navbar/>
            <div className="body">
                <div className="search-container">
                    <div className="search-input-container">
                        <input type="text" value={input} onChange={handleInputChange} className="search-input" placeholder="What can we help you find?"/>
                        <NavLink to='/Signup'><FontAwesomeIcon icon={faSearch} className="search-icon" /></NavLink>
                        <div className="suggestions-container">
                            <div className="suggestions-dropdown">
                                {suggestions.map((suggestion, index) => (
                                    <p key={index}>{suggestion}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <NavLink to='/Signup'><FontAwesomeIcon icon={faCircleXmark} className="close-icon" /></NavLink><br/>
                    <div className="labels">
                        <div>
                        <h4>Most Searched Items</h4>
                    <div className="columns-container">
                    <div className="column">
                        {mostSearchedItems1.map(item => <p className="item" key={item}>{item}</p>)}
                    </div>
                    <div className="column">
                        {mostSearchedItems2.map(item => <p className="item" key={item}>{item}</p>)}
                    </div>
                </div>
                </div>
                    <div>
                        <h4>Most Used Keywords</h4>
                        <div className="columns-container">
                            <div className="column">
                                {mostUsedKeywords1.map(keyword => <p className="item" key={keyword}>{keyword}</p>)}
                            </div>
                            <div className="column">
                                {mostUsedKeywords2.map(keyword => <p className="item" key={keyword}>{keyword}</p>)}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Search

