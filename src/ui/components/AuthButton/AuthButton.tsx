import "./auth-button.scss"

interface Props {
    children: React.ReactNode,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    type?: "primary" | "secondary",
    className?: string,
}

function AuthButton({ children, onClick, className = "", type = "primary" }: Props) {
    return (
        <button
            className={`button button--${type} ${className}`}
            onClick={onClick}
        >
            { children }
        </button>
    )
}

export default AuthButton
