import "./App.css";
import { Props } from "./components/Props";

function App() {
  const College = [
    {
      name: "Aman",
      course: "Mern stack",
    },
    {
      name: "Omkar",
      course: "Mern stack",
    },
    {
      name: "Vinayak",
      course: "Mern stack",
    },
  ];

  return (
    <>
      <div>
        {/* {College.map((item) => {
          return <Props Col={item} />;
        })} */}
        {College.map(function(elem,inx){
          console.log(inx);
          return <div key={inx}>
            <Props Student={elem.name} course={elem.course}/>
          </div>
        })}
      </div>
    </>
  );
}

export default App;
