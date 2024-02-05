import { Link } from 'react-router-dom';

type MovieProps = {
  dataMovie: any;
};

export default function MovieResult({ dataMovie }: MovieProps) {
  return (
    <aside className="max-w-[1200px]  flex flex-wrap mx-auto  h-auto mt-16  justify-start">
      {' '}
      <div className="table_area w-[1000px]  flex flex-wrap sm:mx-1 mx-5 justify-center">
        {/* INPUT AREA */}
        <h1 className="font-bold text-3xl w-full sm:ml-2">Results</h1>
        {/* CHECKBOX AREA */}

        <table className="w-[100%] ">
          {/* title */}
          <thead className="h-10 border-b-2 border-slate-300 ">
            <tr>
              <th className="w-3/5 text-start pl-5 md:w-[10%] sm:w-[1%] ">
                Title
              </th>
              <th className="w-[10%] lg:w-[15%] md:w-[20%] sm:w-[10%]">Year</th>
              <th className="w-[15%] lg:w-[10%] md:w-[20%] sm:w-[15%] sm:px-5 md:hidden">
                Type
              </th>
              <th className="w-[15%] lg:w-[15%] md:w-[25%] sm:w-[2%]">
                Detailview
              </th>
            </tr>
          </thead>
          {dataMovie.map((movie: any, index: number) => {
            const { Title, Year, Type } = movie;

            return (
              <tbody
                className=" h-10 border-b-2 border-slate-300 "
                key={index}
                data-id={index + 1}
              >
                <tr>
                  <td className="w-3/5 pl-5 sm:w-[5%]">{Title}</td>
                  <td className="text-center">{Year}</td>
                  <td className="text-center md:hidden">{Type}</td>
                  <td>
                    <div className="cursor-pointer bg-gradient-to-l bg-pink-500 from-orange-400 px-3 py-2 my-2 text-center text-xl font-medium text-white rounded-md md:text-lg sm:text-base sm:px-1 lg:text-sm">
                      <Link to={`/movieId/${index}`} state={movie}>
                        Show more
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </aside>
  );
}
