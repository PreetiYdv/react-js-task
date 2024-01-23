import React, { useEffect, useState } from 'react'

const ApiFetching = () => {
    let [dogImage, setDogImage] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random/21")
            .then(response => response.json())
            .then(data => setDogImage(data.message)
            )
        console.log('data')
    }, [])
    return (
        <>
            <div className="flex flex-wrap">
                {dogImage && dogImage?.map((dog) => <img width={"200px"} height={"200px"} src={dog} alt="dog_image" />)}

            </div>
        </>
    )
}

export default ApiFetching