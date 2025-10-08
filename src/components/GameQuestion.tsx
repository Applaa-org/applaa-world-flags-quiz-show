"use client";
import * as React from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, Flag } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Country } from "@/data/flags";

interface GameQuestionProps {
  flagCountry: Country;
  options: Country[];
  onSelect: (selectedId: number, correctId: number) => void;
  timeLeft: number;
  totalTime: number;
  questionNumber: number;
  totalQuestions: number;
}

export default function GameQuestion({
  flagCountry,
  options,
  onSelect,
  timeLeft,
  totalTime = 45,
  questionNumber,
  totalQuestions,
}: GameQuestionProps) {
  const { toast } = useToast();
  const progress = (timeLeft / totalTime) * 100;

  const handleSelect = (country: Country) => {
    onSelect(country.id, flagCountry.id);
    if (country.id !== flagCountry.id) {
      toast({
        title: "Wrong!",
        description: `It's ${flagCountry.name}!`,
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg">
      <CardContent className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>{timeLeft}s</span>
          </div>
          <div className="text-sm text-gray-600">
            Q{questionNumber} / {totalQuestions}
          </div>
        </div>
        <Progress value={progress} className="h-2" />
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            {/* Flag container with smooth transition for steady visibility */}
            <div className="relative w-48 h-36 rounded-lg shadow-md overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105">
              <img
                key={flagCountry.id} // Key ensures smooth remount with transition
                src={flagCountry.flagUrl}
                alt={`Flag of ${flagCountry.name}`}
                className="w-full h-full object-contain transition-opacity duration-500 ease-in-out opacity-100"
                loading="eager" // Prioritize loading to prevent flicker
              />
              {/* Optional subtle overlay for steadiness during change */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-500" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 transition-opacity duration-300">Which country does this flag belong to?</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {options.map((option) => (
            <Button
              key={option.id}
              variant="outline"
              className={cn("h-16 justify-start p-3 text-left", "hover:bg-blue-50 transition-all duration-200")}
              onClick={() => handleSelect(option)}
            >
              <Flag className="h-5 w-5 mr-2 flex-shrink-0" />
              {option.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}