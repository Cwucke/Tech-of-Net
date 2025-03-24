import React, { Component, useState } from "react";
import Button from "../components/Button";
import { Container } from "../components/Container";
import Input from "../components/Input";
import Text from "../components/Text";

const Home =() =>{
    const [text, setText] = useState("");
    const [items, setItems] = useState(["яблоко", "банан", "вишня"])
    const [newElement, setNewElement] = useState("")
        return (
            <Container>
                <div className="flex flex-col gap-4 w-full h-full items-center justify-center">
                    <h1>Список</h1>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <Input onChange={(e) => setNewElement(e.target.value)}></Input>
                    <Button onClick={() => setItems([...items, newElement])} size="medium" title="Добавить элемент" color="primary"></Button>
                </div>
            </Container>
        );
}
 
export default Home;