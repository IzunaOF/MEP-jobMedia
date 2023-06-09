import InputList from "@/pages/InputList";
import { useState, useCallback } from "react";
import type { ChangeEventHandler, SetStateAction } from "react";

type Contact = {
    RefTo: string;
    dominio: string;
    type: string;
};

function Contacts() {
    const [contactList, setContactList] = useState<Contact[]>([{ RefTo: "", dominio: "", type: "" }]);
    const [addContact, setaddContact] = useState<boolean>(false);
    const [newContact, setNewContact] = useState<Contact>({ RefTo: "", dominio: "", type: "" });

    const handleNewContact = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
        const alter = ev.target.value;

        const ref: "RefTo" | "dominio" | "type" | undefined | string = ev.currentTarget.id;

        if (ref === undefined || (ref !== "RefTo" && ref !== "dominio" && ref !== "type")) return;
        setNewContact((prevState: Contact): Contact => {
            return { ...prevState, [ref]: alter };
        });
    }, []);

    return (
        <li className="flex flex-col gap-5">
            <ul>
                <InputList
                    type="email"
                    id="email"
                    placeholder="Email@dominio.com"
                    label="Email:"
                />
                <InputList
                    type="tel"
                    id="phone"
                    placeholder="(11) 99876-5432"
                    label="Telefone:"
                />
                <li className="flex flex-col items-center justify-center max-h-28 overflow-y-scroll">
                    {contactList?.length > 1 ? (
                        contactList.map((c, i) => {
                            if (c.RefTo === "" || c.dominio === "" || c.type === "") return;
                            return (
                                <ul className="flex items-center  justify-center">
                                    <InputList
                                        type="text"
                                        id={c.type + i}
                                        label={`#${i}`}
                                        value={c.dominio}
                                        disabled={true}
                                    />
                                    <li className="text-[10px]">{c.type}</li>
                                </ul>
                            );
                        })
                    ) : (
                        <li></li>
                    )}{" "}
                </li>
                <li>
                    <button
                        type="button"
                        onClick={() =>
                            setaddContact((prev) => {
                                return !prev;
                            })
                        }
                        className="text-3xl text-right w-full text-mainGreenAqua">
                        +
                    </button>
                    {addContact && (
                        <ul
                            className={`flex flex-col gap-1 transition-all duration-500 ${
                                addContact ? "mt-[20px]" : "mt-0"
                            }`}>
                            <InputList
                                id="type"
                                label="Tipo"
                                placeholder="ex: Email ou Telefone"
                                value={newContact.type}
                                onchange={handleNewContact}
                                className="text-sm px-1"
                            />
                            <InputList
                                id="dominio"
                                label="Dominio"
                                placeholder="contato"
                                value={newContact.dominio}
                                onchange={handleNewContact}
                                className="text-sm px-1"
                            />
                            <InputList
                                id="RefTo"
                                label="Externo"
                                placeholder="opcional"
                                value={newContact.RefTo}
                                onchange={handleNewContact}
                                className="text-sm px-1"
                            />{" "}
                            <li className="flex justify-center w-full">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setContactList((prev: Contact[]): Contact[] | any => {
                                            return [...prev, { ...newContact }];
                                        });
                                    }}>
                                    Confirmar
                                </button>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </li>
    );
}

export default Contacts;
