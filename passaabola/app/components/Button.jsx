export default function Button({ children, className = '', variant = 'primary', ...props }) {
  const baseClasses = `font-bold py-3 px-8 rounded-full text-lg shadow-md
                       transition duration-300 ease-in-out transform hover:scale-105
                       focus:outline-none focus:ring-4 focus:ring-opacity-75`;

  const variants = {
    primary: 'bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-300',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-300 focus:ring-gray-300',
    outline: 'bg-transparent border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-300'
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}