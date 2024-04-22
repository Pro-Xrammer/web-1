import ButtonSvg from '../assets/svg/ButtonSvg'

const Button = ({ className, href, onClick, children, px,  white}) => {


const classes = `Button relative items-centerjustify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${white?'text-n-8':'text-n-1'} ${className || ''}`;

const spanClasses = "relative  z-10";

const RenderLink = () => {
    <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
    </a>
}

const renderButton =() => (
    <button className={classes} onClick={onClick}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
    </button>
)
    return  href?RenderLink():renderButton()
};

export default Button;