import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, BarChart3, Share2, Star, Target, Zap, AlertCircle, Lightbulb } from "lucide-react";

function getGrade(score, total) {
  const pct = (score / total) * 100;
  if (pct === 100) return { emoji: "🏆", text: "¡PERFECTO!", color: "text-yellow-500" };
  if (pct >= 80) return { emoji: "🌟", text: "¡Excelente!", color: "text-emerald-500" };
  if (pct >= 60) return { emoji: "💪", text: "¡Muy bien!", color: "text-secondary" };
  if (pct >= 40) return { emoji: "📖", text: "¡Sigue practicando!", color: "text-primary" };
  return { emoji: "🙏", text: "¡No te rindas!", color: "text-accent" };
}

function getMotivationalMessage(correctCount, totalQuestions) {
  const percentage = (correctCount / totalQuestions) * 100;
  
  if (percentage === 100) {
    return "¡Has dominado completamente los libros de la Biblia! Tu dedicación es admirable. 🎉";
  }
  if (percentage >= 90) {
    return "¡Increíble trabajo! Estás muy cerca de la perfección. Sigue así. 🚀";
  }
  if (percentage >= 80) {
    return "¡Vas muy bien! Ya conoces la mayoría de los libros. ¡Vas aprendiendo! 📚";
  }
  if (percentage >= 70) {
    return "¡Buen progreso! Repasa los que fallaste y mejorarás rápidamente. 💪";
  }
  if (percentage >= 50) {
    return "¡Vas en el camino correcto! Cada intento te acerca a dominar la Biblia. 📖";
  }
  return "¡No te rindas! Recuerda que la práctica hace al maestro. ¡Sigue aprendiendo! 🎯";
}

export default function ResultsScreen({ score, totalQuestions, correctCount, incorrectAnswers = [], onPlayAgain, onShowStats }) {
  const maxScore = totalQuestions * 5;
  const grade = getGrade(score, maxScore);
  const motivationalMessage = getMotivationalMessage(correctCount, totalQuestions);

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

      {/* Motivational Message */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-2"
      >
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
          <p className="text-sm font-semibold text-blue-900">{motivationalMessage}</p>
        </div>
      </motion.div>

      {/* Error Summary */}
      {incorrectAnswers.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-red-50 border border-red-200 rounded-2xl p-5 space-y-4"
        >
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <h3 className="font-bold text-red-900">Recuerda la próxima vez:</h3>
          </div>
          
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {incorrectAnswers.map((error, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="bg-white rounded-lg p-3 border border-red-100 text-left text-sm"
              >
                <p className="font-semibold text-red-700 mb-1">{error.question}</p>
                <div className="space-y-1">
                  <p className="text-red-600">
                    <span className="font-medium">❌ Respondiste:</span> {error.userAnswer}
                  </p>
                  <p className="text-emerald-600">
                    <span className="font-medium">✅ Correcta:</span> {error.correctAnswer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Final Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <p className="text-lg font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          ¡Vas muy bien! ¡Sigue aprendiendo! 📖
        </p>
      </motion.div>

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