import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const TraditionalWisdomSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#07130e] leading-tight mb-6">
                Got Traditional Wisdom?
                <br />
                <span className="text-[#0e7b5d]">Help Shape the Future.</span>
              </h2>
              
              <p className="text-lg text-[#4b5a56] leading-relaxed mb-8">
                Your ancestral knowledge holds the keys to tomorrow's breakthroughs. 
                Share traditional remedies, contribute to our growing database, and 
                help bridge ancient wisdom with modern science.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[#0e7b5d] rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#07130e] mb-1">Preserve Cultural Heritage</h4>
                  <p className="text-[#4b5a56] text-sm">Document and protect traditional knowledge for future generations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[#0e7b5d] rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#07130e] mb-1">Earn Recognition</h4>
                  <p className="text-[#4b5a56] text-sm">Get credited for your contributions with blockchain-verified attribution</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[#0e7b5d] rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#07130e] mb-1">Shape Research</h4>
                  <p className="text-[#4b5a56] text-sm">Influence the direction of plant medicine research worldwide</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button className="bg-[#0e7b5d] hover:bg-[#0c6b4d] text-white px-6 py-3 rounded-xl font-medium">
                Share Your Knowledge
              </Button>
              <Button variant="outline" className="border-[#0e7b5d] text-[#0e7b5d] hover:bg-[#0e7b5d] hover:text-white px-6 py-3 rounded-xl font-medium">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Side - Bonsai Tree Visual */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-[#e8f5e8] to-[#d4f0d4] border-none shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-12 text-center">
                {/* Bonsai Tree Illustration - placeholder for now */}
                <div className="relative mx-auto mb-8">
                  <div className="w-48 h-48 mx-auto bg-[#0e7b5d] rounded-full flex items-center justify-center">
                    <span className="text-6xl">🌳</span>
                  </div>
                  
                  {/* Decorative elements around the tree */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#ffd99a] rounded-full opacity-70"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#0e7b5d] rounded-full opacity-50"></div>
                  <div className="absolute top-8 -right-8 w-4 h-4 bg-[#ffd99a] rounded-full opacity-60"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#07130e] mb-4">
                  Ancient Roots, Modern Growth
                </h3>
                <p className="text-[#4b5a56] leading-relaxed">
                  Every traditional remedy you share becomes part of a living database 
                  that grows stronger with each contribution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background decorative wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 200" className="w-full h-auto">
          <path
            d="M0,100 C360,180 720,20 1440,100 L1440,200 L0,200 Z"
            fill="#f8fffe"
            opacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
};
