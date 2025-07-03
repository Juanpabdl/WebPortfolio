import React from "react";
import './index.css'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {}

const CustomButton = (props: ButtonProps) => {
    //const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {}

    return(
        <button {...props}/>
    )
}

export default CustomButton;