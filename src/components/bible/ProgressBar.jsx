import React from "react";
import { motion } from "framer-motion";

export default function ProgressBar({ current, total, score }) {
  const pct = ((current) / total) * 100;

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between items-center text-sm font-bold">
        <span className="text-muted-foreground">
          Pregunta {Math.min(current + 1, total)} / {total}
        </span>
        <span className="text-primary text-lg">⭐ {score} pts</span>
      </div>
      <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}