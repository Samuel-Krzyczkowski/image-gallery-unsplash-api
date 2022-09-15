// /src/pages/Search.js

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";


export default function GetImages() {
    const [images, setImages] = useState([]);
    const [currentQuery, setCurrentQuery] = useState();
    const [currentSort, setCurrentSort] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [totalImages, setTotalImages] = useState();
    

    useEffect(() => {
      // Fetch photos with default query and add to images
        const defaultQuery = "Architecture"
        const defaultSort = "relevant"
        const fetchImages = async () => {
            const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=${defaultQuery}`)
            const data = await response.json();
            setImages(data.results);
            setTotalPages(data.total_pages);
            setTotalImages(data.total);
            setCurrentQuery(defaultQuery);
            setCurrentSort(defaultSort);
        }
        fetchImages();
    }, [])

    function getResponse(query, sort="relevant") {
      // Fetch photos with query passed from SearchBar and add to images
      const fetchImages = async () => {
        const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=${query}&order_by=${sort.toLowerCase()}`)
        const data = await response.json();
        setCurrentQuery(query);
        setCurrentSort(sort);
        setImages(data.results);
        
    }
    fetchImages();
    }

    function getPage(page) {
      // Fetch photos from a different page with page passed from Pagination and add to images
      let request = `&page=${page}&query=${currentQuery}`

      const fetchImages = async () => {
        const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}${request}`)
        const data = await response.json()
        setCurrentPage(page);
        setImages(data.results);
    }
    fetchImages();
  
    }
    
    return (
      <>
        <>
        <SearchBar getResponse={getResponse} current={currentQuery}/>
        <Pagination getPage={getPage} current={currentPage} total_pages={totalPages} total={totalImages} />
          <div className="container flex justify-center mx-auto 2xl:px-0 max-w-7xl">
            {!images ? (
              <div>
                <h1>Loading...</h1>
              </div>
            ) : (
              <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pb-20 container">
                {images.map((image) => (
                  <Link key={image.id} to={{
                    pathname: `/image/${image.id}`,
                    
                  }} className="bg-transparent text-white">
                    <Image key={image.id} {...image} />
                    
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