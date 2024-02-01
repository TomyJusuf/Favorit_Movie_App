export default function SearchArea() {
  return (
    <aside className="max-w-[1200px]  flex gap-x-5 container mx-auto  border-b-[2px] border-slate-300 h-auto mt-16 ">
      <div className="table_area w-full  flex flex-wrap sm:mx-0 mx-5">
        {/* INPUT AREA */}
        <div className="input_area w-1/2  flex justify-start flex-wrap sm:mx-5 sm:w-full">
          <div className="w-full mr-5">
            <h1 className="w-full">
              Name of movie/series/episode{' '}
              <span className="text-red-600">*</span>
            </h1>
            <input
              type="text"
              placeholder="type here ..."
              className=" border rounded-md border-slate-400 w-full py-2 placeholder:px-2"
            />
          </div>
          <button className="my-5 bg-blue-600 text-white rounded-md   py-3 px-10 font-bold text-lg sm:py-1 sm:px-3">
            search
          </button>
        </div>
        {/* CHECKBOX AREA */}
        <div className="checkbox_area w-1/2 sm:w-full  sm:px-5 sm:mb-5">
          <h1 className="w-full">
            Select type<span className="text-red-600">*</span>
          </h1>
          <div className="checkbox_area_table flex  w-56 gap-x-7 h-10 items-center">
            <div className="checkbox_area_movie ">
              <input
                type="radio"
                name="movie"
                id="movie"
                className="w-6 h-6 border-[1px] appearance-none valid:ring-0  border-slate-400 ring:text-white  focus:text-blue-600 mr-3"
              />
              <label htmlFor="movie" className="text-lg">
                movie
              </label>
            </div>
            <div className="checkbox_area_series">
              <div className="checkbox_area_series">
                <input
                  type="radio"
                  name="movie"
                  id="series"
                  className="w-6 h-6 border-[1px] valid:ring-0 border-slate-400 ring:text-white  focus:text-blue-600 mr-4"
                />
                <label htmlFor="series" className="text-lg">
                  series
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
