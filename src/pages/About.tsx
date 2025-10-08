"use client";
import * as React from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Zap } from "lucide-react";
import { MadeWithApplaa } from "@/components/made-with-applaa";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" onClick={() => navigate({ to: "/" })} className="mb-6">
          ← Back to Home
        </Button>
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg mb-8">
          <CardHeader>
<applaa-write path="src/pages/About.tsx" description="About page with game story, features, and team info. Includes Header and back button.">
"use client";
import * as React from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Zap } from "lucide-react";
import { MadeWithApplaa } from "@/components/made-with-applaa";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" onClick={() => navigate({ to: "/" })} className="mb-6">
          ← Back to Home
        </Button>
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">About FlagQuiz Pro</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              FlagQuiz Pro is an engaging, fast-paced web game designed to test and improve your knowledge of world flags. 
              Whether you're a geography enthusiast or just looking for a fun brain teaser, our adaptive quiz system ensures 
              every session is challenging and rewarding. We believe learning should be exciting, so we've packed in features 
              like sudden-death rounds, global leaderboards, and randomized flag sets to keep you coming back.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To make geography accessible and fun for everyone. By gamifying flag recognition, we help players learn about 
              cultures, histories, and global diversity in an interactive way.
            </p>
          </CardContent>
        </Card>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Fast-Paced Gameplay</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">30-second timers and sudden-death modes keep the adrenaline high.</p>
            </CardContent>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Adaptive Difficulty</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Questions get harder or easier based on your performance streak.</p>
            </CardContent>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Global Competition</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Climb leaderboards and compete with players worldwide.</p>
            </CardContent>
          </Card>
        </section>

        {/* Team Section */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Meet the Team</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-2xl">JD</span>
              </div>
              <h4 className="font-semibold">Jordan Developer</h4>
              <p className="text-sm text-gray-600">Lead Developer & Game Designer</p>
              <p className="text-xs text-gray-500">Passionate about educational games and React.</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-2xl">AS</span>
              </div>
              <h4 className="font-semibold">Alex Smith</h4>
              <p className="text-sm text-gray-600">UI/UX Designer</p>
              <p className="text-xs text-gray-500">Creating intuitive and beautiful interfaces.</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-2xl">MK</span>
              </div>
              <h4 className="font-semibold">Mia Khan</h4>
              <p className="text-sm text-gray-600">Content Specialist</p>
              <p className="text-xs text-gray-500">Curating accurate flag facts and trivia.</p>
            </div>
          </CardContent>
        </Card>
      </main>
      <footer className="mt-12 border-t border-gray-200 pt-6">
        <MadeWithApplaa />
      </footer>
    </div>
  );
};

export default About;