import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const Contact = () => {
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg="6" md="6" className="mt-5 mb-5">
            <Form>
              <FormGroup>
                <Label for="exampleEmail"></Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword"></Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText"></Label>
                <Input
                  type="textarea"
                  name="text"
                  placeholder="Message"
                  id="exampleText"
                />
              </FormGroup>
              <Button>Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
