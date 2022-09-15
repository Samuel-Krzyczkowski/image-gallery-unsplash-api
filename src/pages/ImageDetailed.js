// /src/pages/ImageDetailed.js

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns"

export default function ImageDetailed() {
  const [images, setImages] = useState();
  let param = useParams();

  
  useEffect(() => {
    // Fetch specific photo by id and add to images
    const fetchImage = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos/${param.id}?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      const data = await response.json();
      setImages(data);
    };
    fetchImage();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-7xl lg:px-8">
          
        {!images ? ( 
          <div>
            <h1>Loading...</h1>   
          </div>
        ) : (
          <section>
            {/* Header part - user info + download button */}
            <div className="flex justify-between items-center bg-white max-h-16 h-16 w-full">
              <div className="px-2 md:px-4 flex justify-center items-center">
                <div className="pr-2">
                  <a href={images.user.links.html} target="_blank">
                    <img
                      src={images.user.profile_image.large}
                      className="max-h-10 rounded-full hover:shadow-lg"
                    />
                  </a>
                </div>
                <div>
                  <div>{images.user.name}</div>
                  <div>
                    <a href={images.user.social.portfolio_url} target="_blank">
                      {images.user.social.instagram_username}
                    </a>
                  </div>
                </div>
              </div>
              <div className="pr-2">
                <a href={images.links.download} target="_blank">
                  <div className="flex space-x-2 justify-center">
                    <div>
                      <button
                        type="button"
                        className="px-6 pt-2.5 pb-2 bg-gray-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out flex align-center items-center"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="download"
                          className="w-3 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                          ></path>
                        </svg>
                        Download
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* End of header part */}

            {/* Image view part */}
            <div className="flex justify-center">
              <div className="bg-white flex justify-center items-center p-3">
                <img
                  className="max-h-[700px] max-w-full"
                  src={images.urls.regular}
                />
              </div>
            </div>
            {/* End of image view part */}

            {/* Image Details part */}
            <div className="flex justify-center">
              <div className=" bg-white w-full flex items-center">
                <div className="flex justify-around items-center h-24">
                  <div className="px-5">
                    <div className="text-gray-500">Views</div>
                    <div>{images.views}</div>
                  </div>
                  <div className="px-5">
                    <div className="text-gray-500">Downloads</div>
                    <div>{images.downloads}</div>
                  </div>
                  <div className="px-5">
                    <div className="text-gray-500">Created</div>
                    <div>{format(new Date(images.created_at), "dd MMMM yyyy")}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Image Details part */}
          </section>
        )}
      </div>
    </>
  );
}
