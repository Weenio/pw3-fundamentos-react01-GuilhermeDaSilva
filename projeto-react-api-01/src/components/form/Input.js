import styles from './Input.module.css';

export default function Input({type, text, name, placeholder, handlerOnChange, value}){
    return(
        <div>

            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                text={text}
                name={name}
                id={name}
                placeholder={placeholder}
                OnChange={handlerOnChange}
                value={value}
            />
        </div>
    )
}