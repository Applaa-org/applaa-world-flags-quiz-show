"use client";
import * as React from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, ArrowLeft } from "lucide-react";
import { showSuccess } from "@/utils/toast";

interface GameResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onSubmitScore?: () => void;
}

export default function GameResults({ score, totalQuestions, onRestart, onSubmitScore }: GameResultsProps) {
  const percentage = (score / totalQuestions) * 100;
  const isWin = percentage >= 80;

  React.useEffect(() => {
    if (isWin) {
      showSuccess("Great job! You're a flag expert!");
    } else {
      showSuccess("Good effort! Practice makes perfect.");
    }
    onSubmitScore?.();
  }, [isWin, onSubmitScore]);

  return (
    <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm shadow-lg">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-4">
          <Trophy className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-3xl font-bold">{isWin ? "Victory!" : "Results"}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <p className="text-2xl font-bold text-blue-600">{score} / {totalQuestions}</p>
        <p className="text-lg text-gray-600">{percentage.toFixed(0)}% Accuracy</p>
        <div className="space-y-2">
          <Button onClick={onRestart} className="w-full">
            Play Again
          </Button>
          <Link to="/leaderboard">
            <Button variant="outline" className="w-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              View Leaderboard
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}