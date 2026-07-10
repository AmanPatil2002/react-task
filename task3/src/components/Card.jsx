import profile from "../assets/profile.png";

function Card(props) {
  return (
    <div className="card">
      <img src={profile} alt="Profile" />
      <h1>{props.user}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button>View Profile</button>
    </div>
  );
}

export default Card;