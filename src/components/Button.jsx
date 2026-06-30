import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = ({ 
  children, 
  to, 
  variant = 'primary', 
  className, 
  size = 'md',
  onClick,
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300";
  
  const variants = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all",
    outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all",
    ghost: "text-gray-600 dark:text-gray-300 hover:text-dark-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
