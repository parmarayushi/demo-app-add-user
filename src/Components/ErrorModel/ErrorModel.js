import React from "react";

import Button from "../Users/Button";

export default function ErrorModel(props) {
    return (
        <section className="d-flex flex-column align-items-center border p-4 position-absolute bg-light" onClick={props.onConfirm}>
            <header>{props.title}</header>
            <main>{props.message}</main>
            <footer className="mt-3">
                <Button>Okay</Button>
            </footer>
        </section>
    )
}