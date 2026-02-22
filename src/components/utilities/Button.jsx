

const Button = ({ children, variant = 'primary', className = '', href = '#' }) => {
  const baseStyles = 'headline-xs px-6 py-5 uppercase rounded-lg border-2 font-bold cursor-pointer w-full md:max-w-[380px] transition-all duration-300 inline-flex items-center justify-center text-center focus:ring focus:ring-primary-neutral-700 focus:ring-offset-4 focus:ring-2';

  const variants = {
    primary: 'text-primary-neutral-900 border-primary-neutral-900 bg-secondary-light-salmon-50 hover:bg-gradient-to-r hover:from-secondary-light-salmon-100 hover:to-secondary-light-salmon-50',
    secondary: 'text-primary-neutral-000 border-primary-neutral-000 bg-secondary-light-salmon-900 hover:bg-gradient-to-r hover:from-primary-neutral-700 hover:to-primary-neutral-900',
    outline: 'border border-gray-400 text-gray-800 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:border-gray-500 dark:text-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600 focus:ring-gray-400',
  };
  
  return (
    <a href={href} className={`${baseStyles} ${className} ${variants[variant]}`}>
      {children}
    </a>
  );
};

export default Button;
