import { Card } from "react-bootstrap";
import "../../css/Intro.css";
import * as avatar from "../../asset/avatar1024.jpg";
import AboutUs from "./AboutUs";

function Intro(props) {

  return (
    <div className="intro">
      <Card bg="light" className="intro-card" ref={props.introRef}>
        <Card.Body>
          <div className="intro-wrapper">
            <Card.Img src={avatar.default} alt="Avatar" id="intro-avatar"></Card.Img>
          </div>
          <Card.Text>Quan Nguyen is a junior fullstack developer enthusiasm in IT industry. With the knowledge as an Engineering student, he has has developed The Winston company to empower web development technology to another level. With many talented employees, the company is 100% funder-owned and highly profitable.</Card.Text>
        </Card.Body>
      </Card>
      <div className="ref-blank" ref={props.aboutUsRef}></div>
      <AboutUs miniEmp={props.miniEmp}/>
    </div>
  );
}

export default Intro;
