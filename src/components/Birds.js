import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Birds(props) {
    const [birds, setBirds] = useState([]) //<-- Set the initial state here by passing it an empty array []

    function fetchBird() {
        fetch("https://ga-audubon-api.herokuapp.com/api/birds") //<-- the url as a string
            // Wait for the response and convert it to json
            .then((res) => res.json())
            // Take the json and do something with it
            .then((json) => {
                // the json parameter holds the json data
                // so here's where you will need to
                // use the setBirds method put the json into state
                setBirds(json)
            })
            // Catch and log any errors to the console
            .catch(console.error)
    }

    useEffect(() => {
        fetchBird()
    }, [])

    return (
        <section className="container">
            {birds.map(bird => (
                <Link to={`/details/${bird._id}`} key={bird._id}>
                    <div className="card">
                        <div className="card-image">
                            <img src={bird.image} alt={bird.name} />
                        </div>
                        <div className="card-title">
                            <h3>{bird.name}</h3>
                        </div>
                    </div>
                </Link>
            ))}

        </section>
    )
}

export default Birds