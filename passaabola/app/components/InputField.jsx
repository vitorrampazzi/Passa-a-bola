import { Input } from 'lucide-react'; // Exemplo de ícone, pode ser qualquer um

export default function InputField({ label, id, type = 'text', placeholder, value, onChange, icon: Icon, ...props }) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-gray-700 text-sm font-semibold mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                      focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50
                      ${Icon ? 'pl-10' : ''}`} // Adiciona padding para o ícone
          {...props}
        />
      </div>
    </div>
  );
}