export const calculateMonthlyPayment = (loanAmount, interestRate, loanTerm) => {
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  return (
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
  ).toFixed(2);
};

export const calculateTotalInterest = (
  monthlyPayment,
  loanTerm,
  loanAmount
) => {
  return (monthlyPayment * loanTerm * 12 - loanAmount).toFixed(2);
};
