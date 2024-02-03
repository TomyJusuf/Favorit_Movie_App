import Footer from './Footer';
import Navbar from './Navbar';

export default function ActionPopUpCart() {
  return (
    <div className="bg-slate-100 h-[90%]">
      <Navbar />
      {/* Body section */}
      <div className="body_Action w-auto mx-16   h-auto  sm:mx-5">
        {/* **** TITLE ***** */}
        <div className="body_title  flex gap-x-10  mt-16 sm:flex-wrap">
          <img src="" alt="" className=" w-48 h-60" />
          <div className="title_Action ml-14 sm:ml-0">
            <h1 className="font-bold text-4xl my-5">Spider-Man</h1>
            <p className="text-xl">2002 / Action, Dventure, Sci-Fi</p>
          </div>
        </div>
        {/*  ***** TABLE **** */}
        <div className="mt-16">
          <div className="title flex ">
            <h1 className="mr-16 font-bold">Title</h1>
            <h5>Spiderman</h5>
          </div>
          <hr className="border-b-[1px] border-gray-300 my-5" />
          <div className="title flex">
            <h1 className="mr-[4.2rem] font-bold">Year</h1>
            <h5>2002</h5>
          </div>
          <hr className="border-b-[1px] border-gray-300 my-5" />
          <div className="title flex">
            <h1 className="mr-14 font-bold">Genre</h1>
            <h5>Action, adventure, sci-fi</h5>
          </div>
          <hr className="border-b-[1px] border-gray-300 my-5" />
          <div className="title flex">
            <h1 className="mr-[4.3rem] font-bold">Plot</h1>
            <h5>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              neque pariatur velit harum reprehenderit sed cum explicabo
              consequuntur dolor accusantium, quas qui natus cupiditate quod at
              nihil minus inventore illo, quo eius? Ipsam, necessitatibus harum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              labore dolore eveniet iusto eius quaerat rem at fugiat delectus
              cum.
            </h5>
          </div>
          <hr className="border-b-[1px] border-gray-300 my-5" />
          <div className="title flex">
            <h1 className="mr-16 font-bold">Type</h1>
            <h5>movie</h5>
          </div>
          <hr className="border-b-[1px] border-gray-300 my-5" />
          <div className="title flex mb-12">
            <h1 className="mr-8 font-bold">Released</h1>
            <h5>03 may 2002</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
