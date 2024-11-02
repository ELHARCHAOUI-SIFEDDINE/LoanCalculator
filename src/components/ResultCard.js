const ResultCard = ({ title, value, gradient, currencySymbol }) => (
  <div className={`bg-gradient-to-br ${gradient} p-4 rounded-2xl`}>
    <h3 className="text-xs font-medium text-gray-700 mb-1">{title}</h3>
    <p className="text-lg font-bold text-gray-800">
      {currencySymbol}
      {value}
    </p>
  </div>
);

export default ResultCard;
