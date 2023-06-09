

function LandingPage() {
    // const [isSearching, setIsSearching] = useState<boolean>(false);

    // const calle = useCallback(() => {
    //     const [search, setSearchResult] = useState<any>(null);
    //     if (!isSearching) {
    //         useEffect(() => {
    //             Promise.resolve(axios.get(`http://localhost:3000/search/Test`)).then((res) =>
    //                 setSearchResult(res.data)
    //             );
    //         }, []);
    //     }
    //     return search;
    // }, []);

    // const HandleSearch = () => {
    //     const search = calle();
    //     if (search != null) {
    //         return search.map((s: any, i: number) => {
    //             return (
    //                 <div key={s + i}>
    //                     <p>{s.firstName}</p>
    //                 </div>
    //             );
    //         });
    //     } else {
    //         return <div>Loading...</div>;
    //     }
    // };

    return (
        <section className="flex flex-col gap-4 py-32 text-minimunGreen w-full h-full ">
            <h1 className="text-mainGreenAqua w-full h-full p-20 text-6xl flex flex-col">
                Conectando aos Profissionais de <span className="text-mainLittleDarkYellow">Santa Catarina</span>
            </h1>
            <div className="flex items-center justify-center gap-32">
                <div className="flex flex-col leading-10 py-32 text-xl items-start justify-start  customBorder-t customBorder-b customBorder-customCustomBorderColor">
                    <p>Conect-se com profissionais de todas as áreas</p>
                    <p>Rápido e Fácil</p>
                    <div className="flex flex-col h-max w-max gap-1">
                        <p className="flex gap-1">
                            Crie agora mesmo sua conta
                            <span className="text-mainLittleDarkYellow justify-start items-start text-xl leading-9 font-semibold">
                                Meu Eu Porfissional
                            </span>
                        </p>
                        <p className="text-minimunBlue">
                            e junte-se aos vários profiissonais que já utilizam a plataforma
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-s gap-4 items-center">
                    <div className="flex flex-col  items-start">
                        <span className="text-minimunBlue text-4xl">De Que Precisa </span>
                        <span className="text-minimunBlue text-4xl">Para quem Precisa</span>
                    </div>
                    <a
                        href="/login"
                        target="_parent"
                        className="customButton pointer bg-custtomBGButton hover:bg-mainBGHover">
                        Ingressar
                    </a>
                </div>
            </div>
        </section>
    );
}

export default LandingPage;
