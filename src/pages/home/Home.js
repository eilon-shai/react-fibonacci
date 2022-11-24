import React, {useState} from 'react';
import {Button, Card, Container} from "react-bootstrap";
import axios from "axios";


const Home = () => {

    const [num, setNum] = useState(0);
    const [res, setRes] = useState("");
    const MAX = 100;

    const calculateFibonacci = (e) => {
        e.preventDefault();
        console.log("working, num is " + num);
        if(isNaN(Number(num))){
            setNum(0);
            setRes("not valid number");
        } else if (num > MAX) {
            setNum(0);
            setRes("max number supported is " + MAX);
        }
        else {
            const api = 'https://main.d3m0iqt5fejij.amplifyapp.com/';
            const data = { "number" : num };
            axios
                .post(api, {"body" : data})
                .then((response) => {
                    setRes(response.data);
                })
                .catch((error) => {
                    setRes("internal error");
                });
        }
    }

    return (
        <div>
            <Container>
                <div className="title">Fibonacci calculator</div>
                <Card className="form-box">
                    <div className="field1">
                        <label>select a number:</label>
                        <input type='text' value={num || ''} onChange={(e) => setNum(e.target.value)}/>
                    </div>
                    <Button style={{width :'130px', margin: '10px 577px'}} onClick={(e) => calculateFibonacci(e)} className="submitBtn">Calculate</Button>
                </Card>
                <div className="footer">{res || ''}</div>
            </Container>
        </div>
    )
};


export default Home;
