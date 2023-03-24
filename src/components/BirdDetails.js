function BirdDetails() {
    return (
        <div className="details-container">
            <img 
                src="https://www.audubon.org/sites/default/files/styles/bird_illustration/public/4492_Sibl_9780307957900_art_r1.jpg?itok=8HuhVVIy"
                alt="Acadian Flycatcher"
            />
            <div className="details">
                <h2>Acadian Flycatcher </h2>
                <h3>(Empidonax virescens)</h3>
                <h4>Conversation Status</h4>
                <p>
                    Would be vulnerable to loss of habitat, but no significant decline noted so far. In some regions, Brown-headed Cowbirds lay eggs in nests of the species.
                </p>
                <a
                    href="https://www.audubon.org/field-guide/bird/acadian-flycatcher"
                    target="_blank"
                    rel="noopener noreferrer"
                >Read More</a>
            </div>
        </div>
    )
} 

export default BirdDetails