import React, { useState } from "react";
import { ReactDOM } from "react";
import  Button  from "react-bootstrap/Button";

export default function CountdownButton({children, ...rest}) {

    return (
        <>
        <Button variant="light" style={{fontSize: "35px", padding: "8px"}} {...rest}>{children}</Button>
        </>
    )
}
