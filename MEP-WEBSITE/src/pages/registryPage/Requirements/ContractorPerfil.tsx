import InputList from "../../InputList";

const Contractor = () => {
    return (
        <>
            <li>
                <ul>
                    <InputList
                        placeholder="Nome"
                        id="firstname"
                        label="Nome:"
                    />
                    <InputList
                        placeholder="Sobrenome"
                        id="lastname"
                        label="Sobrenome:"
                    />
                    <InputList
                        placeholder="123.456.789-04"
                        id="cpf"
                        label="CPF:"
                        maxLength={14}
                    />
                    <InputList
                        placeholder="birthday"
                        id="birthday"
                        type="date"
                        label="Data Nascimento:"
                    />
                    <InputList
                        type="password"
                        placeholder="myPass*123"
                        id="password"
                        label="Password:"
                        minLength={7}
                    />
                </ul>
            </li>
        </>
    );
};

export default Contractor;
