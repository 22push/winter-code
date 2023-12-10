import classes from './medicines.module.css';
import Card from '../UI/Card';
import axios from 'axios';
import { useState } from 'react';

export default function Medicines() {

    const [input, setInput] = useState('');
    // const [search1, setSearch1] = useState('');
    // const [search2, setSearch2] = useState('');

    const inuptChangeHandler = (event) => {
        setInput(event.target.value);
        searchHandler();
    }
    const searchHandler = async (event) => {
        let searchquery = input;
        const options = {
            method: 'GET',
            url: 'https://medicine-search-and-autocomplete.p.rapidapi.com/api/medicine/1',
            headers: {
                'X-RapidAPI-Key': '6a652b0e2amshb8c055bdfe30715p18e82djsn30c013e75cdf',
                'X-RapidAPI-Host': 'medicine-search-and-autocomplete.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={classes.container}>
            <h1>Medicines</h1>
            <Card>
                <div className={classes.intercontainer}>
                    <div>
                        <h4>Search for medicines (by Brand name or ingredients) </h4>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="eg. Paracetamol"
                                aria-label="search"
                                aria-describedby="basic-addon2"
                                onChange={inuptChangeHandler}

                            />
                            <button className="btn btn-outline-primary" type="button" id="basic-addon2">
                                Search
                            </button>
                        </div>
                        {/* <div id="suggestions-container">
                            {suggestions.length > 0 && (
                                <div>
                                    {suggestions.map((headline, index) => (
                                        <div
                                            key={index}
                                            className="suggestion"
                                            onClick={() => handleSuggestionClick(headline)}
                                        >
                                            {headline}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div> */}
                    </div>
                </div>
            </Card>
        </div>
    );
}