"use client";
import * as React from "react";
import { useNavigate } from "@tanstack/react-router";
import Header from "@/components/Header";
import GameQuestion from "@/components/GameQuestion";
import GameResults from "@/components/GameResults";
import { countries } from "@/data/flags";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { showError, showSuccess } from "@/utils/toast";

const Play = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [gameState, setGameState] = React.useState<"playing" | "suddenDeath" | "finished">("playing");
  const [timeLeft, setTimeLeft] = React.useState(30);
  const [timerId, setTimerId] = React.useState<NodeJS.Timeout | null>(null);
  const [streak, setStreak] = React.useState(0); // For adaptive difficulty
  const [selectedOptions, setSelectedOptions] = React.useState<Set<number>>(new Set()); // Track used countries
  const totalQuestions = 10;
  const suddenDeathQuestions = 3; // Max sudden death attempts
  const [suddenDeathAttempts, setSuddenDeathAttempts] = React.useState(0);

  // Shuffle array helper
  const shuffle = <T>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);

  // Generate new question set (random 10 unused countries, adaptive difficulty)
  const generateQuestions = React.useCallback(() => {
    let available = countries.filter(c => !selectedOptions.has(c.id));
    if (available.length < 4) available = countries; // Reset if low

    // Adaptive: More hard questions if streak > 3, easy if < 2
    const difficultyFilter = streak > 3 ? (c: typeof countries[0]) => c.difficulty === "hard" || Math.random() > 0.5
      : streak < 2 ? (c: typeof countries[0]) => c.difficulty === "easy"
      : (c: typeof countries[0]) => true;
    available = available.filter(difficultyFilter);

    const selected = shuffle(available).slice(0, totalQuestions);
    setSelectedOptions(new Set(selected.map(c => c.id)));
    return selected;
  }, [streak, selectedOptions]);

  const [questions] = React.useState(generateQuestions);

  // Timer logic
  React.useEffect(() => {
    if (gameState === "playing" || gameState === "suddenDeath") {
      setTimeLeft(30);
      const id = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(id);
            handleTimeOut();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      setTimerId(id);
      return () => clearInterval(id);
    }
  }, [currentQuestion, gameState]);

  const handleTimeOut = () => {
    setStreak(0);
    nextQuestion(false);
  };

  const handleSelect = (selectedId: number, correctId: number) => {
    const isCorrect = selectedId === correctId;
    if (isCorrect) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
      showSuccess("Correct!");
    } else {
      setStreak(0);
      showError("Time's up or wrong!");
    }
    nextQuestion(isCorrect);
  };

  const nextQuestion = (wasCorrect: boolean) => {
    if (timerId) clearInterval(timerId);

    if (gameState === "playing") {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        // End regular game, check for sudden death
        setGameState("finished");
      }
    } else if (gameState === "suddenDeath") {
      if (wasCorrect) {
        if (suddenDeathAttempts < suddenDeathQuestions - 1) {
          setSuddenDeathAttempts(prev => prev + 1);
          setCurrentQuestion(prev => prev + 1);
        } else {
          setGameState("finished");
        }
      } else {
        // Lose sudden death
        setScore(prev => prev); // No add
        setGameState("finished");
      }
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setStreak(0);
    setGameState("playing");
    setSelectedOptions(new Set());
    generateQuestions(); // New set
  };

  const submitScore = () => {
    // Placeholder for Supabase submission
    console.log("Score submitted:", score);
  };

  if (gameState === "finished") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header />
        <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
          <Button variant="ghost" onClick={() => navigate({ to: "/" })} className="mb-8 self-start">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <GameResults score={score} totalQuestions={totalQuestions + suddenDeathAttempts} onRestart={restartGame} onSubmitScore={submitScore} />
        </main>
      </div>
    );
  }

  const currentCountry = questions[currentQuestion];
  const options = shuffle(countries.filter(c => c.id !== currentCountry.id && !selectedOptions.has(c.id)).slice(0, 3).concat(currentCountry));

  const isSuddenDeath = gameState === "suddenDeath";
  const displayTotal = isSuddenDeath ? suddenDeathQuestions : totalQuestions;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        <Button variant="ghost" onClick={() => navigate({ to: "/" })} className="mb-8 self-start">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
        <Card className="w-full max-w-4xl bg-white/80 backdrop-blur-sm shadow-lg">
          <CardContent className="p-0">
            <div className="p-6 text-center">
              <h1 className="text-3xl font-bold mb-2">Flag Quiz {isSuddenDeath ? "(Sudden Death)" : ""}</h1>
              <p className="text-gray-600">Score: {score} | Streak: {streak} | Time: {timeLeft}s</p>
            </div>
            <GameQuestion
              flagCountry={currentCountry}
              options={options}
              onSelect={handleSelect}
              timeLeft={timeLeft}
              totalTime={30}
              questionNumber={currentQuestion + 1}
              totalQuestions={displayTotal}
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Play;