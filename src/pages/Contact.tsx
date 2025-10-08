"use client";
import * as React from "react";
import { useNavigate } from "@tanstack/react-router";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { MadeWithApplaa } from "@/components/made-with-applaa";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" onClick={() => navigate({ to: "/" })} className="mb-6">
          ← Back to Home
        </Button>
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-gray-700">
              Have questions about FlagQuiz Pro? We'd love to hear from you! Reach out via email or our contact form.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center space-y-2">
                <Mail className="h-8 w-8 text-blue-600" />
                <p className="font-medium">Email</p>
                <p className="text-sm text-gray-600">support@flagquizpro.com</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Phone className="h-8 w-8 text-green-600" />
                <p className="font-medium">Phone</p>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="h-8 w-8 text-purple-600" />
                <p className="font-medium">Address</p>
                <p className="text-sm text-gray-600">123 Geo Street, World City</p>
              </div>
            </div>
            {/* Placeholder form */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Send us a message</h3>
              <div className="space-y-2">
                <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
                <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
                <textarea placeholder="Your Message" rows={4} className="w-full p-2 border rounded" />
                <Button className="w-full">Send Message</Button>
              </div>
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

export default Contact;