import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function BirdDetails(props) {
    const [bird, setBird] = useState(null)
    const {id} = useParams()
    console.log(id)
    
    async function fetchDetailBird() {
        try{
            const response = await fetch(`https://ga-audubon-api.herokuapp.com/api/birds/${id}`)
            const detailData = await response.json()
            setBird(detailData)
        } catch(err){
            console.log(err)
        }
    }
    useEffect(()=> {
        fetchDetailBird()
    },[])
    if (!bird) {
        return <p>...Loading bird information...</p>
    }
    else {return (
        <div className="details-container">
            <img src={bird.image} alt={bird.name} />
            <div className="details">
                <h2>{bird.name} </h2>
                <h3>{bird.genus}</h3>
                <h4>Conversation Status</h4>
                <p>
                    {bird.conservationStatus}
                </p>
                <a
                    href={bird.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                >Read More</a>
            </div>
        </div>
    )}
} 

export default BirdDetails