import * as React from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Trophy, Clock } from "lucide-react";
import Header from "@/components/Header";
import { MadeWithApplaa } from "@/components/made-with-applaa";
import { countries } from "@/data/flags";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <section className="text-center space-y-8 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Master World Flags
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Test your geography knowledge in a fast-paced quiz! Match flags to countries, climb leaderboards, and unlock adaptive challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/play">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 text-lg">
                Start Quiz Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured Content */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Global Flags</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Challenge yourself with flags from {countries.length} countries across 6 continents.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle>Leaderboards</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Compete globally and see your rank among top players.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Fast-Paced</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                30-second timer per question, with sudden-death rounds for ties.
              </CardDescription>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-white/50 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Test Your Skills?</h2>
          <p className="text-gray-600 mb-6">Adaptive difficulty adjusts to your performance for the perfect challenge.</p>
          <Link to="/play">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3">
              Play Free
            </Button>
          </Link>
        </section>
      </main>
      <footer className="mt-auto">
        <MadeWithApplaa />
      </footer>
    </div>
  );
};

export default Index;