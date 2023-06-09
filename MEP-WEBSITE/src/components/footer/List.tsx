type ListProps = {
    image: string;
    alt: string;
    href: string;
    hrefText: string;
};

const List = (list: ListProps) => {
    return (
        <li className="flex gap-3 items-center justify-start">
            <img
                className="w-[20px] h-max "
                src={list.image}
                alt={list.alt}
            />
            <a
                className="hover:text-mainColorHover"
                href={list.href}
                target="_blank">
                {list.hrefText}
            </a>
        </li>
    );
};

export default List;
