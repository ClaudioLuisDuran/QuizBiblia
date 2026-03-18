import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import OptionButton from "./OptionButton";
import { HelpCircle } from "lucide-react";

export default function QuestionCard({ question, selected, answered, onSelect }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.question}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.35 }}
        className="space-y-5"
      >
        {/* Question */}
        <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-2xl p-5 border border-primary/20">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/20 rounded-xl shrink-0">
              <HelpCircle className="w-5 h-5 text-primary" />
            </div>
            <p className="text-lg font-bold leading-snug pt-1">{question.question}</p>
          </div>
        </div>

        {/* Options */}
        <div className="grid gap-3">
          {question.options.map((opt, i) => (
            <OptionButton
              key={opt}
              label={opt}
              index={i}
              selected={selected}
              correctAnswer={question.correctAnswer}
              answered={answered}
              onSelect={onSelect}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}