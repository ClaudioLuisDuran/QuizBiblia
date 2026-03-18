import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Gamepad2, Trophy, Target, TrendingUp, Flame } from "lucide-react";

export default function StatsScreen({ stats, onBack }) {
  const items = [
    { icon: Gamepad2, label: "Partidas jugadas", value: stats.gamesPlayed, color: "text-primary bg-primary/10" },
    { icon: Trophy, label: "Mejor puntaje", value: `${stats.bestScore} pts`, color: "text-yellow-500 bg-yellow-50" },
    { icon: TrendingUp, label: "Puntaje promedio", value: `${stats.avgScore} pts`, color: "text-secondary bg-secondary/10" },
    { icon: Target, label: "Total correctas", value: stats.totalCorrect, color: "text-emerald-500 bg-emerald-50" },
    { icon: Flame, label: "Total preguntas", value: stats.totalQuestions, color: "text-accent bg-accent/10" },
    { icon: Target, label: "Precisión global", value: `${stats.totalQuestions > 0 ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100) : 0}%`, color: "text-secondary bg-secondary/10" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack} className="rounded-xl">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-2xl font-black">📊 Mis Estadísticas</h2>
      </div>

      <div className="grid gap-3">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
          >
            <div className={`p-3 rounded-xl ${item.color}`}>
              <item.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
              <p className="text-xl font-black">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {stats.gamesPlayed === 0 && (
        <p className="text-center text-muted-foreground text-sm font-medium py-4">
          ¡Juega tu primera partida para ver tus estadísticas! 🎮
        </p>
      )}

      <Button
        onClick={onBack}
        className="w-full h-12 font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl"
      >
        Volver
      </Button>
    </motion.div>
  );
}