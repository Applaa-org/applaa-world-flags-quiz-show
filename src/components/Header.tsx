"use client";
import * as React from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            FlagQuiz Pro
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={cn(
              "transition-colors font-medium text-sm",
              isHome ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
            )}
          >
            Home
          </Link>
          <Link
            to="/play"
            className="transition-colors font-medium text-sm text-gray-700 hover:text-blue-600"
          >
            Play
          </Link>
          <Link
            to="/leaderboard"
            className="transition-colors font-medium text-sm text-gray-700 hover:text-blue-600"
          >
            Leaderboard
          </Link>
          <Link
            to="/about"
            className="transition-colors font-medium text-sm text-gray-700 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="transition-colors font-medium text-sm text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col justify-between h-full">
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className={cn(
                      "block text-lg font-medium",
                      isHome ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/play"
                    className="block text-lg font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Play
                  </Link>
                </li>
                <li>
                  <Link
                    to="/leaderboard"
                    className="block text-lg font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block text-lg font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block text-lg font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}