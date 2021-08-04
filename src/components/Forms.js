import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'
import { Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.css";
import { Clock, FilterLeft } from 'react-bootstrap-icons';
import Filter from './Filter';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


function Forms({todos, setTodos, inputText, inputTime, setInputText, setInputTime, filter, setFilter, handleFilter}) {

    function inputTextHandler(e){
        console.log(e.target.value);
        setInputText(e.target.value);
        
    };

    function inputTimeHandler(e){
        setInputTime(e.target.value);
        
    };

    function handleSubmit(e){
    
        e.preventDefault();
        setTodos([
            ...todos,{text:inputText, time:inputTime, completed:false,id: uuid()}
        ]);
        setInputText("");
        setInputTime("");
        
    };

    function handleFilter(e){

        setFilter(e.target.value);
    };


    return (
        <Form>
            <Row >
                <Col>
                </Col>
                <Col>
                </Col>
                <Col xs={5}>
                    <Form.Control id="inlineFormInputName" maxlength="65" value={inputText} name="activity" onChange={inputTextHandler} placeholder="Add Todo" />
                </Col>
                <Col xs={2}>
                    <InputGroup >
                        <InputGroup.Text>
                            <Clock/>
                        </InputGroup.Text>
                        <OverlayTrigger key="top" placement="top" overlay={
                            <Tooltip id={"tooltip-top"}>
                               Minute Estimation
                            </Tooltip>}
                        >
                            <FormControl min="1" max="999999" type="number" value={inputTime} onChange={inputTimeHandler} name="time" placeholder="Min. Spent"/>
                        </OverlayTrigger>
                    </InputGroup>
                </Col>
                <Col xs="auto">
                    <Button id="button-add" variant="secondary" onClick={handleSubmit} >+</Button>
                </Col>
                <Col xs={2}>
                    <InputGroup>                    
                        <InputGroup.Text>
                            <FilterLeft/>
                        </InputGroup.Text>
                        <OverlayTrigger key="top" placement="top" overlay={
                            <Tooltip id={"tooltip-top"}>
                               Filter by Minute
                            </Tooltip>}>
                            <Form.Control id="Filter" as="select" onChange={handleFilter}>
                                <option value="All">All</option>
                                 {todos.map((todo) => (
                                     <Filter time={todo.time}/>
                                     ))}
                            </Form.Control>
                        </OverlayTrigger>
                    </InputGroup>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
        </Form>
    );
  }
  
  export default Forms;