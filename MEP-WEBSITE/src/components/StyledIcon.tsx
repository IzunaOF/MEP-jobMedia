type StyledIconProps = {
    image: string;
    title: string;
    alt: string;
};

const StyledIcon = (icon: StyledIconProps) => {
    return (
        <div className="flex flex-col gap-1 font-kurale">
            <img
                className="flex flex-col p-4 w-[75px] border border-customBorderColor rounded-lg hover:scale-110 hover:border-mainColorHover"
                src={icon.image}
                alt={icon.alt}
            />
            <span>{icon.title}</span>
        </div>
    );
};

export default StyledIcon;
