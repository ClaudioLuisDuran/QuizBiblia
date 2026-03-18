import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Play, BarChart3, ChevronRight, Share2 } from "lucide-react";
import { generateQuiz } from "../components/bible/bibleData";
import ProgressBar from "../components/bible/ProgressBar";
import QuestionCard from "../components/bible/QuestionCard";
import ResultScreen from "../components/bible/ResultScreen";
import StatsScreen from "../components/bible/StatsScreen";
import Confetti from "../components/bible/Confetti";

const QUESTIONS_PER_GAME = 15;
const POINTS_PER_CORRECT = 5;
const STATS_KEY = "bible_quiz_stats";
const AUTO_ADVANCE_CORRECT = 1000;   // 1 second if correct
const AUTO_ADVANCE_WRONG = 2500;     // 2.5 seconds if wrong

function getStats() {
  const raw = localStorage.getItem(STATS_KEY);
  if (!raw) return { gamesPlayed: 0, bestScore: 0, avgScore: 0, totalCorrect: 0, totalQuestions: 0, scores: [] };
  return JSON.parse(raw);
}

function saveStats(score, correct) {
  const s = getStats();
  s.gamesPlayed += 1;
  s.totalCorrect += correct;
  s.totalQuestions += QUESTIONS_PER_GAME;
  s.scores.push(score);
  s.bestScore = Math.max(s.bestScore, score);
  s.avgScore = Math.round(s.scores.reduce((a, b) => a + b, 0) / s.scores.length);
  localStorage.setItem(STATS_KEY, JSON.stringify(s));
}

export default function Home() {
  const [screen, setScreen] = useState("home"); // home | quiz | results | stats
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const autoAdvanceRef = useRef(null);

  // Stable handleNext using refs to avoid stale closures
  const scoreRef = useRef(score);
  const correctCountRef = useRef(correctCount);
  const currentIndexRef = useRef(currentIndex);
  scoreRef.current = score;
  correctCountRef.current = correctCount;
  currentIndexRef.current = currentIndex;

  const goNext = useCallback(() => {
    if (currentIndexRef.current + 1 >= QUESTIONS_PER_GAME) {
      saveStats(scoreRef.current, correctCountRef.current);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
      setScreen("results");
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelected(null);
      setAnswered(false);
    }
  }, []);

  const handleSelect = useCallback((option) => {
    if (answered) return;
    setSelected(option);
    setAnswered(true);

    const isCorrect = option === questions[currentIndexRef.current].correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + POINTS_PER_CORRECT);
      setCorrectCount(prev => prev + 1);
    }

    const delay = isCorrect ? AUTO_ADVANCE_CORRECT : AUTO_ADVANCE_WRONG;
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    autoAdvanceRef.current = setTimeout(goNext, delay);
  }, [answered, questions, goNext]);

  // Manual next button also clears timer
  const handleNext = useCallback(() => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    goNext();
  }, [goNext]);

  // Cleanup on unmount
  useEffect(() => {
    return () => { if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current); };
  }, []);

  const startGame = useCallback(() => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    setQuestions(generateQuiz(QUESTIONS_PER_GAME));
    setCurrentIndex(0);
    setScore(0);
    setCorrectCount(0);
    setSelected(null);
    setAnswered(false);
    setScreen("quiz");
  }, []);

  // HOME SCREEN
  if (screen === "home") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md text-center space-y-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-28 h-28 rounded-3xl overflow-hidden shadow-lg shadow-primary/25"
          >
            <img src="https://media.base44.com/images/public/69b6ad089485da9011d70da3/c458e9d72_BibliaQuiz.jpg" alt="Biblia Quiz" className="w-full h-full object-cover" />
          </motion.div>

          <div>
            <h1 className="text-4xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Quiz Bíblico
            </h1>
            <p className="text-sm font-semibold text-muted-foreground mt-1 italic">
              del prof. Claudio
            </p>
            <p className="text-muted-foreground font-medium mt-2 text-sm">
              Aprende los 73 libros de la Biblia Católica
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { emoji: "❓", text: "15 preguntas" },
              { emoji: "⭐", text: "5 pts c/u" },
              { emoji: "🏆", text: "75 pts max" },
            ].map((f) => (
              <div key={f.text} className="bg-card border border-border rounded-xl p-3">
                <div className="text-2xl">{f.emoji}</div>
                <p className="text-xs font-bold text-muted-foreground mt-1">{f.text}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <Button
              onClick={startGame}
              className="w-full h-16 text-xl font-black bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity rounded-2xl shadow-lg shadow-primary/20"
            >
              <Play className="w-6 h-6 mr-2" />
              ¡Jugar!
            </Button>
            <Button
              onClick={() => setScreen("stats")}
              variant="outline"
              className="w-full h-12 font-bold rounded-xl"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              Ver estadísticas
            </Button>
          </div>

          <Button
            onClick={() => {
              const url = window.location.origin + window.location.pathname;
              const text = `📖 Quiz Bíblico del prof. Claudio\nAprendé los 73 libros de la Biblia Católica jugando!\n👉 ${url}`;
              if (navigator.share) {
                navigator.share({ title: "Quiz Bíblico", text, url });
              } else {
                navigator.clipboard.writeText(text);
                alert("¡Enlace copiado al portapapeles!");
              }
            }}
            variant="ghost"
            className="w-full text-xs text-muted-foreground font-medium gap-2"
          >
            <Share2 className="w-4 h-4" />
            Compartir esta app
          </Button>

          <p className="text-xs text-muted-foreground">
            Nombres, abreviaturas, grupos y testamentos 📖
          </p>
        </motion.div>
      </div>
    );
  }

  // STATS SCREEN
  if (screen === "stats") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <StatsScreen stats={getStats()} onBack={() => setScreen("home")} />
        </div>
      </div>
    );
  }

  // RESULTS SCREEN
  if (screen === "results") {
    return (
      <>
        <Confetti active={showConfetti} />
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <ResultScreen
              score={score}
              totalQuestions={QUESTIONS_PER_GAME}
              correctCount={correctCount}
              onPlayAgain={startGame}
              onShowStats={() => setScreen("stats")}
            />
          </div>
        </div>
      </>
    );
  }

  // QUIZ SCREEN
  const currentQuestion = questions[currentIndex];
  if (!currentQuestion) return null;

  const isCorrect = answered && selected === currentQuestion.correctAnswer;

  return (
    <div className="min-h-screen flex flex-col p-4 max-w-md mx-auto">
      {/* Progress */}
      <div className="pt-2 pb-4">
        <ProgressBar current={currentIndex} total={QUESTIONS_PER_GAME} score={score} />
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col justify-center">
        <QuestionCard
          question={currentQuestion}
          selected={selected}
          answered={answered}
          onSelect={handleSelect}
        />
      </div>

      {/* Feedback & Next */}
      <div className="py-4 space-y-3">
        <AnimatePresence>
          {answered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center font-bold text-sm py-2 px-4 rounded-xl ${isCorrect ? "bg-emerald-50 text-emerald-600 border border-emerald-200" : "bg-red-50 text-red-600 border border-red-200"}`}
            >
              {isCorrect
                ? "✅ ¡Correcto! +5 puntos"
                : `❌ La respuesta era: ${currentQuestion.correctAnswer}`}
              <div className="text-xs mt-1 font-normal opacity-70">
                {isCorrect ? "Avanzando en 1 segundo..." : "Avanzando en 2.5 segundos..."}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          onClick={handleNext}
          disabled={!answered}
          className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity rounded-xl disabled:opacity-30"
        >
          {currentIndex + 1 >= QUESTIONS_PER_GAME ? "Ver resultados" : "Siguiente"}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}