import {MouseEventHandler} from "react";
export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler <HTMLButtonElement>;
    btnType?: "button" | "submit",  


}

export interface PlayerProps {
    id:number;
    first_name: string;
    height_feet:null;
    height_inches:null;
    last_name:string;
    position:string;
    team:{};
    weight_pounds:null;
}