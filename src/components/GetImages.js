import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageDetailed from "../pages/ImageDetailed";
import Image from "./Image";


export default function GetImages() {
    const [images, setImages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
            const data = await response.json()
            console.log(data)
            setImages(data)
        }
        fetchImages();
    }, [])

    return (
      <>
        <>
          <div className="container mx-auto px-5 2xl:px-0">
            <h1 className="text-slate-800 text-center font-bold py-5 text-3xl md:text-4xl lg:text-4xl">
              Recommended
            </h1>

            {!images ? (
              <div>
                <h1>Loading...</h1>
              </div>
            ) : (
              <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pb-20 lg:container">
                {images.map((image) => (
                  <div onClick={() => setIsOpen(true)}>
                     <Link to={{
                       pathname: `/image/${image.id}`,
                     }} className="bg-transparent text-white">
                       <Image key={image} {...image}/>
                     </Link>
                  </div>
                  
                ))}
              </section>
            )}
          </div>
        </>
      </>
    );


}