export default function Footer() {
  return (
    <footer className="max-w-[1200px] flex  container mx-auto  h-auto  sm:px-1">
      <div className="table_area w-full  flex flex-wrap mb-5 mx-5  border-b-[2px] border-slate-300">
        {/* INPUT AREA */}
        <div className="input_area max-w-[850px]  flex justify-start ">
          <div className="w-4/5 mr-5 sm:w-full">
            <h1 className="w-full">
              <span className="font-bold text-2xl">MovieApp</span> /{' '}
              <em className="text-lg">by Tomas Matusek</em>
            </h1>
            <p className="my-1 text-slate-500">created in 2024 / February</p>
            <p className="text-slate-500  pr-16 ">
              Create witch: The OMDb API is a RESTful web service to obtain
              movie information, all content and images on the site are
              contribted and maintained by our users. More infos on the API you
              can find here - {/* */}
              <a href="https://omdbapi.com" className="text-blue-800 underline">
                https://www.omdbapi.com/
              </a>
            </p>
          </div>
        </div>
        {/* CHECKBOX AREA */}
      </div>
    </footer>
  );
}
