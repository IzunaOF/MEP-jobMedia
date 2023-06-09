import InputList from "@/pages/InputList"


const Adress = () => {
  return (
    <> 
    <li className="flex flex-col gap-5">
      <ul className="flex gap-2 w-min">
          <li>
            <ul  className="flex flex-col gap-1 justify-end items-end ">
              <InputList id="country" label="País:" placeholder="Brasil" className="w-1/2"/>
              <InputList id="cep" label="CEP:" placeholder="01234-457" className="w-1/2"/>
              <InputList id="state" label="Estado(UF):" placeholder="SC" className="w-1/2"/>
              <InputList id="houseNum" label="Número:" placeholder="451" className="w-1/2"/>
            </ul>
          </li>  
          <li className="w-max flex">
            <ul className="flex flex-col gap-5 justify-end items-end">
              <InputList id="city" label="Cidade:" placeholder="Florianópolis" className="w-1/2"/>
              <InputList id="neighbor" label="Bairro:" placeholder="Pereque" className="w-1/2"/>
              <InputList id="street" label="Rua:" placeholder="Jucelino" className="w-1/2"/>
            </ul>
          </li>
       </ul>
              <InputList id="complement" label="Complemento:" placeholder="max 100 caracteres" className="w-full"/>
    </li>   
    </>
  )
}

export default Adress