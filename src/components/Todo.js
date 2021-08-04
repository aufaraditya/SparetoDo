import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Trash, CheckLg } from "react-bootstrap-icons";





function Todo({text, todo, time, todos, setTodos}) {

    function handleDelete(){
        setTodos(todos.filter((e) => e.id !== todo.id ));

    };

    function handleComplete(e){
        setTodos(todos.map((e) => {
            if(e.id === todo.id){
                return {
                    ...e, completed: !e.completed //The Opposite
                };
            }
            return e;
        } ));
    };



    return (
        <Row>
            <Col>
            </Col>
            <Col>
                <Form.Check id= "toogle-checked" onChange={handleComplete} checked = {todo.completed ? true : false} />    
            </Col>
            <Col xs={5} >
                <ListGroup>
                    <ListGroup.Item variant="dark" id = {todo.completed ? "Completed": ''} >{text}</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col xs={1}>
                <ListGroup>
                    <ListGroup.Item variant="dark" id = {todo.completed ? "Completed": ''}>{time}</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col xs="auto" >
                <Button  variant="secondary" onClick={handleDelete}>
                    <Trash/>
                </Button>
            </Col>
            <Col xs={2}>
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
        </Row>
    );
  }
  
  export default Todo;