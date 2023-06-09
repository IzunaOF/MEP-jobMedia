type Props = {
    type?: string;
    placeholder?: string;
    id: string;
    label: string;
    className?: string;
    value?: string;
    maxLength?: number;
    minLength?: number;
    disabled?: boolean;
    onchange?: any;
};

function InputList({
    value,
    className = "",
    type = "text",
    placeholder = type,
    id = "",
    label = "",
    maxLength = 999,
    minLength = 0,
    disabled = false,
    onchange = null,
}: Props) {
    return (
        <li className="flex gap-4 justify-end items-center">
            <label
                htmlFor={id}
                className="text-sm">
                {label}
            </label>
            <input
                className={`${className} border-b border-b-transparent bg-transparent focus:border-b-mainColorHover placeholder:text-xs`}
                type={type}
                id={id}
                name={id}
                value={value}
                placeholder={placeholder}
                maxLength={maxLength}
                minLength={minLength}
                disabled={disabled}
                onChange={onchange}
            />
        </li>
    );
}

export default InputList;
