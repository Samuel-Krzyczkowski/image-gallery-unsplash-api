import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";


export default function Pagination(props) {
    let total = props.total
    let total_pages = props.total_pages
    let current_page = props.current

  return (
    <div className="flex items-center justify-between border-y my-5 border-gray-200 bg-white py-3 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex flex-1 justify-between sm:hidden">
        <div
          onClick={(e) => {
            e.preventDefault();
            props.getPage(current_page - 1);
            window.scrollTo({top: 0, behavior: 'smooth'});
        }}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            props.getPage(current_page + 1);
            window.scrollTo({top: 0, behavior: 'smooth'});
            }}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{current_page * 10 - 9}</span> to{" "}
            <span className="font-medium">{current_page * 10}</span> of{" "}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <div
              onClick={(e) => {
                e.preventDefault();
               
                window.scrollTo({top: 0, behavior: 'smooth'});
                if (current_page - 1 === 0) {
                  props.getPage(current_page);
                } else {
                  props.getPage(current_page - 1);
                }

                }}
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:cursor-pointer focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <div
              onClick={(e) => {
                e.preventDefault();
                props.getPage(1);
                window.scrollTo({top: 0, behavior: 'smooth'});
            }}
              className="relative inline-flex items-center border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:cursor-pointer focus:z-20"
            >
              1
            </div>
            <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
              ...
            </span>
            <div
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({top: 0, behavior: 'smooth'});

                if (current_page - 1 === 0) {
                    props.getPage(current_page);
                } else {
                    props.getPage(current_page - 1);
                }
            }}
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:cursor-pointer focus:z-20"
            >
              {current_page - 1}
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                props.getPage(current_page);
                window.scrollTo({top: 0, behavior: 'smooth'});
                
            }}
              className="relative inline-flex items-center border border-gray-300 bg-gray-200 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:cursor-pointer focus:z-20"
            >
              {current_page}
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                
                window.scrollTo({top: 0, behavior: 'smooth'});
                if (current_page === total_pages) {
                  props.getPage(current_page);
                } else {
                  props.getPage(current_page + 1);
                }
                
            }}
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:cursor-pointer focus:z-20"
            >
              {current_page + 1}
            </div>
            <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
              ...
            </span>
            <div
              onClick={(e) => {
                e.preventDefault();
                props.getPage(total_pages);
                window.scrollTo({top: 0, behavior: 'smooth'});
                
            }}
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:cursor-pointer focus:z-20"
            >
              {total_pages}
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({top: 0, behavior: 'smooth'});
                if (current_page === total_pages) {
                  props.getPage(current_page);
                } else {
                  props.getPage(current_page + 1);
                }
                }}
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:cursor-pointer hover:bg-gray-100 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
