import "./home.css";

const Home = () => {
  return (
    <div>
      <div>
        <img src="bg.png" alt="" className="bg" />
      </div>

      <div className="wrapper">
        <div className="link_wrapper">
          <a href="missing">SEARCH MISSING PEOPLE</a>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 268.832 268.832"
            >
              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
            </svg>
          </div>
        </div>

        <div className="wrapper2">
          <div className="link_wrapper2">
            <a href="upload">UPLOAD A PERSON</a>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 268.832 268.832"
              >
                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="p1">Welcome To Missing Person System</h1>
      </div>

      <div className="div3">
        <h2 className="text">
          This is the best people search system on the market. We have a facial
          recognition technology unique in its functionality and speed. We
          assure 100% of the results when performing a deep search. Our system
          is approved by MIT and Harvard School Of Technology.{" "}
        </h2>
        <h1 className="p2">What do you want to do today?</h1>
        <h1 className="p3">
          Created by: Ricardo Arturo - Andrés Andino - Luis Rodriguez - Carlos
          Collado - Wilson Castillo
        </h1>
      </div>
    </div>
  );
};

export default Home;
