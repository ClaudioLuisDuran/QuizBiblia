import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, BarChart3, Share2, Star, Target, Zap } from "lucide-react";

function getGrade(score, total) {
  const pct = (score / total) * 100;
  if (pct === 100) return { emoji: "🏆", text: "¡PERFECTO!", color: "text-yellow-500" };
  if (pct >= 80) return { emoji: "🌟", text: "¡Excelente!", color: "text-emerald-500" };
  if (pct >= 60) return { emoji: "💪", text: "¡Muy bien!", color: "text-secondary" };
  if (pct >= 40) return { emoji: "📖", text: "¡Sigue practicando!", color: "text-primary" };
  return { emoji: "🙏", text: "¡No te rindas!", color: "text-accent" };
}

export default function ResultsScreen({ score, totalQuestions, correctCount, onPlayAgain, onShowStats }) {
  const maxScore = totalQuestions * 5;
  const grade = getGrade(score, maxScore);

  const appUrl = window.location.origin + window.location.pathname;

  const handleShare = () => {
    const text = `📖 ¡Obtuve ${score}/${maxScore} puntos en el Quiz Bíblico del prof. Claudio! (${correctCount}/${totalQuestions} correctas) ${grade.emoji}\n\n¿Puedes superarme? 🔥\n👉 Jugá acá: ${appUrl}`;
    if (navigator.share) {
      navigator.share({ title: "Quiz Bíblico", text, url: appUrl });
    } else {
      navigator.clipboard.writeText(text);
      alert("¡Puntaje copiado al portapapeles!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="text-center space-y-6"
    >
      {/* Trophy Section */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="text-7xl"
      >
        {grade.emoji}
      </motion.div>

      <div>
        <h2 className={`text-3xl font-black ${grade.color}`}>{grade.text}</h2>
        <p className="text-muted-foreground mt-1 font-medium">Has completado el quiz</p>
      </div>

      {/* Score Card */}
      <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-2xl p-6 border border-primary/20 space-y-4">
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-3xl font-black text-primary">
              <Star className="w-6 h-6" />
              {score}
            </div>
            <p className="text-xs text-muted-foreground font-semibold">PUNTOS</p>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-3xl font-black text-secondary">
              <Target className="w-6 h-6" />
              {correctCount}
            </div>
            <p className="text-xs text-muted-foreground font-semibold">CORRECTAS</p>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-3xl font-black text-accent">
              <Zap className="w-6 h-6" />
              {Math.round((correctCount / totalQuestions) * 100)}%
            </div>
            <p className="text-xs text-muted-foreground font-semibold">PRECISIÓN</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid gap-3">
        <Button
          onClick={onPlayAgain}
          className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity rounded-xl"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Jugar de nuevo
        </Button>
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={onShowStats}
            variant="outline"
            className="h-12 font-bold rounded-xl"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Estadísticas
          </Button>
          <Button
            onClick={handleShare}
            variant="outline"
            className="h-12 font-bold rounded-xl"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Compartir
          </Button>
        </div>
      </div>
    </motion.div>
  );
}