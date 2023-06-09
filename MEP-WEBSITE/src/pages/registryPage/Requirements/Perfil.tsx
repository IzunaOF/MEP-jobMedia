import InputList from "../../InputList";

const Provider = () => {
    return (
        <>
            <li>
                <ul>
                    <InputList
                        placeholder="nome de registro"
                        id="rzsocial"
                        label="Razão Social:"
                    />
                    <InputList
                        placeholder="apelido"
                        id="nmfantasia"
                        label="Nome Fantasia:"
                    />
                    <InputList
                        placeholder="123.456.789-011/85"
                        id="cnpj"
                        label="CNPJ:"
                        maxLength={18}
                    />
                    <InputList
                        placeholder="area de atuação"
                        id="modalidade"
                        label="Modalidade:"
                    />
                    <InputList
                        placeholder="area de atuação"
                        id="setor"
                        label="Setor:"
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

export default Provider;
