import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import SearchBar from "../components/SearchBar"
export default function GetImages() {
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=cat`)
            const data = await response.json()
            console.log(data.results)
            setImages(data.results)
        }
        fetchImages();
    }, [])

    function getResponse(query) {
      const fetchImages = async () => {
        const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=${query}`)
        const data = await response.json()
        console.log(data.results)
        setImages(data.results)
    }
    fetchImages();
    }

    return (
      <>
        <>
        <SearchBar getResponse={getResponse}/>
          <div className="container mx-auto px-5 2xl:px-0">
            <h1 className="text-slate-800 font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-14">
              Search
            </h1>

            {!images ? (
              <div>
                <h1>Loading...</h1>
              </div>
            ) : (
              <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pb-20 lg:container">
                {images.map((image) => (
                  <Link to={{
                    pathname: `/image/${image.id}`,
                    state: {"somekey": "somevalue"}
                  }} className="bg-transparent text-white">
                    <Image key={image} {...image} />
                  </Link>
                  
                ))}
              </section>
            )}
          </div>
        </>
      </>
    );


}