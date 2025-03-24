import React from "react";
import Button from "./Button";
import Input from "./Input";
import Text from "./Text";

const Modal = (props) => {
    const{isOpen, onClose, title, children} = props;
    if (!isOpen) return null;
    return(
        <div className="fixed inset-0 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg w-[400px] relative">
                <h2><Text size="large">{title}</Text></h2>
                <div>
                    <Input placeholder="Название продукта" onChange={() => }></Input>
                </div>
                <Button onClick={onClose} color="secondary" size="medium" title="Закрыть"></Button>
            </div>
        </div>
    )
}

export default Modal;