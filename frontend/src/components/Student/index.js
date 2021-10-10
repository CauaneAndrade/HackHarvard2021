import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker";
import Popup from "reactjs-popup";
import "./style.css";

function Modal({ disabled, setSchedule }) {
  return (
    <Popup
      trigger={
        <Button
          onClick={() => setSchedule(true)}
          variant="outline-success"
          disabled={!disabled}
        >
          Schedule
        </Button>
      }
      modal
    >
      <Container>
        <CardGroup>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>Done! Schedule</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </Popup>
  );
}

function StudentList({ start, image, tutor }) {
  const [startDate, setStartDate] = useState(null);
  const [schedule, setSchedule] = useState(null);

  return (
    <Col className="StudentList">
    <CardGroup>
      <Card style={{ width: "15rem" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            src={image}
          />
          <Card.Title>Subject: Math</Card.Title>
          <Card.Text>Topic: Dicrete Math</Card.Text>
          <Card.Text>Tutor: {tutor}</Card.Text>
          <Card.Text>Level: Intermediate</Card.Text>
          {!start && !schedule && (
            <Card.Text>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                includeTimes={[
                  setHours(setMinutes(new Date(), 0), 17),
                  setHours(setMinutes(new Date(), 30), 18),
                  setHours(setMinutes(new Date(), 30), 19),
                  setHours(setMinutes(new Date(), 30), 17),
                ]}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </Card.Text>
          )}
          {start && (
            <Button variant="outline-primary" href="chat">
              Start Class
            </Button>
          )}
          {!start && !schedule && (
            <Modal setSchedule={setSchedule} disabled={startDate} />
          )}

          {startDate && schedule && <Alert variant="success">Schedule!</Alert>}
        </Card.Body>
      </Card>
    </CardGroup>
    </Col>
  );
}

export default function Student() {
  return (
    <div className="Student">
      <div className="header">Classes</div>
      <div className="line"></div>
      <Container>
      <Row>
        <StudentList tutor="Tony" start={true} image="https://images.unsplash.com/photo-1596496638503-0980ae36f17a?auto=format&fit=crop&w=1470&q=80" />
        <Col />
        <StudentList tutor="Jim" image="https://images.unsplash.com/photo-1514369118554-e20d93546b30?auto=format&fit=crop&w=687&q=80"/>
        <Col />
        <StudentList tutor="Li" image="https://images.unsplash.com/photo-1532294220147-279399e4e00f?auto=format&fit=crop&w=687&q=80"/>
      </Row>
      </Container>
    </div>
  );
}
