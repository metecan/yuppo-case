import { IButtonProps } from './Button.types';
import styles from './Button.module.scss';

const Button = (props: IButtonProps) => {
  const {
    children,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    icon,
    onClick,
    className,
    type = 'button',
  } = props;

  const buttonClass = [styles.button, styles[variant], styles[size], disabled && styles.disabled, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={buttonClass} onClick={onClick} disabled={disabled}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};

export default Button;
