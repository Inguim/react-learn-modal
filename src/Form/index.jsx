import React from "react";
import './styles.css';

const Form = () => {

    return (
        <form>
            <label htmlFor="texto">Digite um texto:</label>
            <textarea name="" placeholder="Textim" cols="30" rows="10"></textarea>
            <textarea name="" placeholder="Textim" cols="30" rows="10"></textarea>
            <textarea name="" placeholder="Textim" cols="30" rows="10"></textarea>
            <textarea name="" placeholder="Textim" cols="30" rows="10"></textarea>
            <textarea name="" placeholder="Textim" cols="30" rows="10"></textarea>

            <button type="button">Salvar</button>
        </form>
    )
}

export default Form;