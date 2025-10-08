"use client";
import * as React from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, ArrowLeft, Crown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock data for now; replace with Supabase query
const mockScores = [
  { rank: 1, name: "Alex Johnson", score: 95, date: "2024-01-15" },
  { rank: 2, name: "Maria Garcia", score: 92, date: "2024-01-14" },
  { rank: 3, name: "Raj Patel", score: 89, date: "2024-01-13" },
  { rank: 4, name: "Emma Wilson", score: 87, date: "2024-01-12" },
  { rank: 5, name: "Liam Chen", score: 85, date: "2024-01-11" },
  { rank: 6, name: "Sophia Lee", score: 82, date: "2024-01-10" },
  { rank: 7, name: "Noah Kim", score: 80, date: "2024-01-09" },
  { rank: 8, name: "Olivia Brown", score: 78, date: "2024-01-08" },
];

const Leaderboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  React.useEffect(() => {
    toast({
      title: "Coming Soon",
      description: "Global leaderboards will sync with Supabase after integration.",
    });
  }, [toast]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" onClick={() => navigate({ to: "/" })} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-center space-x-2">
              <Trophy className="h-8 w-8" />
              <span>Global Leaderboard</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Player</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockScores.map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-bold">
                      {entry.rank === 1 ? <Crown className="h-5 w-5 text-yellow-500 inline" /> : entry.rank}
                    </TableCell>
                    <TableCell>{entry.name}</TableCell>
                    <TableCell>{entry.score}%</TableCell>
                    <TableCell>{entry.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="text-center mt-6 text-sm text-gray-500">
              Your scores will appear here after playing!
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Leaderboard;