import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

export default function OptionButton({ label, index, selected, correctAnswer, answered, onSelect }) {
  const isCorrect = label === correctAnswer;
  const isSelected = selected === label;

  let bg = "bg-card border-2 border-border hover:border-primary hover:bg-primary/5";
  let textColor = "text-foreground";
  let icon = null;

  if (answered) {
    if (isCorrect) {
      bg = "bg-emerald-50 border-2 border-emerald-400";
      textColor = "text-emerald-700";
      icon = <CheckCircle className="w-5 h-5 text-emerald-500" />;
    } else if (isSelected && !isCorrect) {
      bg = "bg-red-50 border-2 border-red-400 animate-shake";
      textColor = "text-red-700";
      icon = <XCircle className="w-5 h-5 text-red-500" />;
    } else {
      bg = "bg-muted/50 border-2 border-border opacity-50";
    }
  }

  const letters = ["A", "B", "C", "D"];

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
      className={`w-full p-4 rounded-xl ${bg} ${textColor} font-semibold text-left flex items-center gap-3 transition-all duration-200 ${!answered ? "cursor-pointer active:scale-[0.98]" : "cursor-default"}`}
      onClick={() => !answered && onSelect(label)}
      disabled={answered}
    >
      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black shrink-0 ${answered && isCorrect ? "bg-emerald-400 text-white" : answered && isSelected ? "bg-red-400 text-white" : "bg-primary/10 text-primary"}`}>
        {letters[index]}
      </span>
      <span className="flex-1 leading-tight">{label}</span>
      {icon}
    </motion.button>
  );
}