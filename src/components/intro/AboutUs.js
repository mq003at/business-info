import MiniCard from "./MiniCard";
import "../../css/AboutUs.css";

function AboutUs({ miniEmp }) {
  return (
    <div className="about-us container text-center" >
      <div className="about-us section-text py-4 my-3">About Us</div>
      <div className="row justify-content-center">
        {miniEmp.map((emp) => (
          <MiniCard key={"mini-card-" + emp.id} miniEmp={emp} />
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
