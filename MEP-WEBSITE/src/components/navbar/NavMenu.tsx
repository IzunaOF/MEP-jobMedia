import React from "react";

type Props = {};

function NavMenu({}: Props) {
    return (
        <ul className="flex p-3 bg-navMenu gap-6 absolute right-24 top-4">
            <li className="text-md">Contratar</li>
            <li className="text-md">Anunciar</li>
        </ul>
    );
}

export default NavMenu;
