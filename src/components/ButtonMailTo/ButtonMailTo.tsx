import React from "react";
import { Link } from "react-router-dom";
interface Props {
    label: string,
    mailto: string
}
const ButtonMailto: React.FC<Props> = ({ mailto, label }) => {
    return (
        <Link className="relative"
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            <span 
            className="relative text-base l:text-xl transition-all ease-in-out 
            delay-150 hover:border-b-4 border-gray-600 duration-300">
                {label}
            </span>
        </Link>
    );
};

export default ButtonMailto;
