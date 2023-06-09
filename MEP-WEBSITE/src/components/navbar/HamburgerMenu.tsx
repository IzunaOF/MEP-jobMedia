import React, { MouseEvent } from "react";

type Props = {
    onclick: any;
};

const HamburgerMenu = ({ onclick }: Props) => {
    return (
        <div
            className="flex flex-col gap-2 w-9 h-9 right-0 top-0 mr-8 mt-5 absolute items-center justify-center cursor-pointer"
            onClick={onclick}>
            <div className="w-full h-1 bg-mainColorHover"></div>
            <div className="w-full h-1 bg-mainColorHover"></div>
            <div className="w-full h-1 bg-mainColorHover"></div>
        </div>
    );
};

export default HamburgerMenu;
