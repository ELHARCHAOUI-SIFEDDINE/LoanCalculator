import { Calculator, Settings2 } from "lucide-react";

const Header = ({ title, onSettingsClick }) => (
  <div className="flex items-center justify-between mb-6 ml-4">
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-blue-600 rounded-xl">
        <Calculator className="w-5 h-5 text-white" />
      </div>
      <h1 className="text-xl font-bold text-gray-800">{title}</h1>
    </div>
    <button
      onClick={onSettingsClick}
      className="p-2 mr-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <Settings2 className="w-5 h-5 text-blue-600 " />
    </button>
  </div>
);

export default Header;
