import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ImageDetailed() {
  const [images, setImages] = useState();
  let param = useParams();

  useEffect(() => {
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
      <div className="container mx-auto px-5 2xl:px-0">
        <h1 className="text-slate-800 font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-14">
          Your Image
        </h1>

        {!images ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pb-20 lg:container">
            <img src={images.urls.regular} />
          </section>
        )}
      </div>
    </>
  );
}
