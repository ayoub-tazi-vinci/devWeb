const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const movie1 : Movie = {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  };
  const movie2 : Movie= {
    title: "GOODBYE JULIA ",
    director: "Mohamed Kordofani",
  };

  const cinema2Name = "UGC Toison d'Or";
  const movie3 : Movie = {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  };
  const movie4: Movie = {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  };

  return (
    <div>
      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movie1={movie1} movie2={movie2} />

      <Cinema2 name={cinema2Name} movie1={movie3} movie2={movie4} />
    </div>
  );
};


interface Movie {
  title: string;
  director: string;
};

const PageTitle = (props: PageTitlePropos ) => {
  return <h1>{props.title}</h1>;
};



interface CinemaProps {
  name: string;
  movie1: Movie;
  movie2: Movie;
  
}

interface PageTitlePropos {
  title: string;
}



const Cinema = (props:CinemaProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>
        {props.movie1.director}-{props.movie1.title}
      </p>
      <p>
       {props.movie2.title}-{props.movie2.director}
      </p>
    </div>
  );
};



const Cinema2 = (props:CinemaProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>
        {props.movie1.title}-{props.movie1.director}
      </p>
      <p>
       {props.movie2.title}-{props.movie2.director}
      </p>
    </div>
  );
};



export default App;
