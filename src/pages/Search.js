import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

export default function GetImages() {
    const [images, setImages] = useState([]);
    const [currentQuery, setCurrentQuery] = useState("cat");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [totalImages, setTotalImages] = useState();
    
    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=architecture`)
            const data = await response.json()
            console.log(data.results)
            setImages(data.results)
            setTotalPages(data.total_pages);
            setTotalImages(data.total);
            
        }
        fetchImages();
    }, [])

    function getResponse(query) {
      const fetchImages = async () => {
        const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=${query}`)
        const data = await response.json()
        console.log(data.results)
        setCurrentQuery(query)
        setImages(data.results)
    }
    fetchImages();
    }

    function getPage(page) {
      
      let request = `&page=${page}&query=${currentQuery}`

      const fetchImages = async () => {
        const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}${request}`)
        const data = await response.json()
        setCurrentPage(page);
        setImages(data.results)
    }
    fetchImages();
  
    }

    return (
      <>
        <>
        <SearchBar getResponse={getResponse}/>
        <Pagination getPage={getPage} current={currentPage} total_pages={totalPages} total={totalImages} />
          <div className="container mx-auto px-5 2xl:px-0">
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
          <Pagination getPage={getPage} current={currentPage} total_pages={totalPages} total={totalImages} />

        </>
      </>
    );


}