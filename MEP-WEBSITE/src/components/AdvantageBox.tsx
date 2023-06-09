
type Props = {
    title: string;
    content: string;
};

const AdvantageBox = (props: Props) => {
    return (
        <div className="z-10 flex flex-col items-center w-[260px] gap-[0.7rem] py-[0.3rem]">
            <span className="text-lg text-titlePurple">{props.title}</span>
            <p className="w-[220px]">{props.content}</p>
        </div>
    );
};

export default AdvantageBox;
