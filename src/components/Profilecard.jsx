import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Profilecard = (props) => {
    console.log(props)
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img style={{height: "150px", borderRadius: "10px", width: "250px"} } variant="top" src={props.img || "no image indicated"}  />
      <Card.Body style={{backgroundColor: ""}}>
        <Card.Title style={{fontWeight: "bolder", fontSize: "25px"}} >{props.name || "No name given yet"}</Card.Title>
        <Card.Title style={{fontWeight: "bold"}} >{props.degree || "no degree indicated"}</Card.Title>
        <Card.Text>
          {props.status || "no status indicated"}
        </Card.Text>
        <Card.Text>
          {props.jobDesc || "no job available"}
        </Card.Text>
        <Button variant="primary">Full info</Button>
      </Card.Body>
    </Card>
  );
};

export default Profilecard
