import React, { useState, useEffect } from "react"


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
            {birds.map(bird => {
                return (
                    <div className="card">
                        <div className="card-image">
                            <img
                                src="https://www.audubon.org/sites/default/files/styles/bird_illustration/public/4492_Sibl_9780307957900_art_r1.jpg?itok=8HuhVVIy"
                                alt="Acadian Flycatcher"
                            />
                        </div>
                        <div className="card-title">
                            <h3>Acadian Flycatcher</h3>
                        </div>
                    </div>
                )
            })}

        </section>
    )
}

export default Birds