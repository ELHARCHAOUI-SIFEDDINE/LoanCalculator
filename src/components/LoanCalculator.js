import React, { useState, useEffect } from "react";
import { DollarSign, Calendar, Percent } from "lucide-react";
import SliderInput from "./SliderInput";
import ResultCard from "./ResultCard";
import SettingsModal from "./SettingsModal";
import Header from "./Header";
import {
  calculateMonthlyPayment,
  calculateTotalInterest,
} from "../utils/calculations";
import { translations, CURRENCY_SYMBOLS } from "../utils/constants";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(2);
  const [interestRate, setInterestRate] = useState(4.5);
  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("USD");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [monthlyPayment, setMonthlyPayment] = useState("0");
  const [totalInterest, setTotalInterest] = useState("0");

  const t = translations[language];

  useEffect(() => {
    const monthlyPaymentValue = calculateMonthlyPayment(
      loanAmount,
      interestRate,
      loanTerm
    );
    const totalInterestValue = calculateTotalInterest(
      monthlyPaymentValue,
      loanTerm,
      loanAmount
    );

    setMonthlyPayment(monthlyPaymentValue);
    setTotalInterest(totalInterestValue);
  }, [loanAmount, loanTerm, interestRate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <Header
          title={t.loanCalculator}
          onSettingsClick={() => setIsModalOpen(true)}
        />

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <SliderInput
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                min={1000}
                max={100000}
                step={1000}
                label={t.loanAmount}
                icon={<DollarSign />}
                symbol={CURRENCY_SYMBOLS[currency]}
                formatter={(val) => val.toLocaleString()}
              />
              <SliderInput
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                min={1}
                max={5}
                step={1}
                label={t.loanTerm}
                icon={<Calendar />}
                symbol=""
                formatter={(val) => `${val} ${t.years}`}
              />
              <SliderInput
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                min={0.1}
                max={20}
                step={0.1}
                label={t.interestRate}
                icon={<Percent />}
                symbol=""
                formatter={(val) => `${val}%`}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800">
                {t.loanBreakdown}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <ResultCard
                  title={t.monthlyPayment}
                  value={parseFloat(monthlyPayment).toLocaleString()}
                  gradient="from-blue-50 to-blue-100"
                  currencySymbol={CURRENCY_SYMBOLS[currency]}
                />
                <ResultCard
                  title={t.totalInterest}
                  value={parseFloat(totalInterest).toLocaleString()}
                  gradient="from-violet-50 to-violet-100"
                  currencySymbol={CURRENCY_SYMBOLS[currency]}
                />
                <ResultCard
                  title={t.totalPayment}
                  value={(
                    parseFloat(monthlyPayment) *
                    loanTerm *
                    12
                  ).toLocaleString()}
                  gradient="from-emerald-50 to-emerald-100"
                  currencySymbol={CURRENCY_SYMBOLS[currency]}
                />
              </div>
            </div>
          </div>
        </div>

        <SettingsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          language={language}
          currency={currency}
          onLanguageChange={(e) => setLanguage(e.target.value)}
          onCurrencyChange={(e) => setCurrency(e.target.value)}
          translations={translations}
        />
      </div>
    </div>
  );
};

export default LoanCalculator;
