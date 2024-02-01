export default function MovieResult() {
  return (
    <aside className="max-w-[1200px]  flex  mx-auto  h-auto mt-16  justify-start">
      <div className="table_area w-[1000px]  flex flex-wrap sm:mx-1 mx-5 justify-center">
        {/* INPUT AREA */}
        <h1 className="font-bold text-3xl w-full sm:ml-2">Results</h1>
        {/* CHECKBOX AREA */}
        <table className="w-[100%] ">
          {/* title */}
          <tr className="h-10 border-b-2 border-slate-300 ">
            <th className="w-3/5 text-start pl-5 md:w-[10%] sm:w-[1%] ">
              Title
            </th>
            <th className="w-[10%] lg:w-[10%] md:w-[10%] sm:w-[5%] ">Year</th>
            <th className="w-[15%] lg:w-[10%] md:w-[10%] sm:w-[5%] sm:px-5">
              Type
            </th>
            <th className="w-[15%] lg:w-[25%] md:w-[35%] sm:w-[15%]">
              Detailview
            </th>
          </tr>{' '}
          {/* result of movies */}
          <tr className=" h-10 border-b-2 border-slate-300 ">
            <td className="w-3/5 pl-5 sm:w-[5%]">Alfreds Futterkiste</td>
            <td className="text-center">2002</td>
            <td className="text-center">movie</td>
            <td>
              {' '}
              <div className="cursor-pointer bg-gradient-to-l bg-pink-500 from-orange-400 px-3 py-2 my-2 text-center text-xl font-medium text-white rounded-md md:text-lg sm:text-base sm:px-1">
                Show more
              </div>
            </td>
          </tr>
          {/* end of movie  */}
        </table>
      </div>
    </aside>
  );
}
