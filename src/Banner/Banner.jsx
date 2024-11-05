import bannerImg from "../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-24 rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold w-2/3 mx-auto lg:mx-0">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn btn-success text-white mt-10 font-bold">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
