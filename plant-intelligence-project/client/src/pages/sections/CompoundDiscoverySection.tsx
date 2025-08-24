import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const CompoundDiscoverySection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}

        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#07130e] leading-tight mb-6">
            Discover compounds, Compare results, and Make better calls
          </h2>
        </div> */}

        <h2 className="text-4xl md:text-4xl text-[#07130e] text-center leading-normal">
          <span className="[font-family:'Maison_Neue-Bold',Helvetica] font-bold">
            Discover{" "}
          </span>
          <span className="[font-family:'Maison_Neue-BookItalic',Helvetica] italic">
            compounds
          </span>
          <span className="[font-family:'Maison_Neue-Bold',Helvetica] font-bold">
            {" "}
            , Compare results, <br />
            and Make better calls
          </span>
          <br />
          <br />
        </h2>

        {/* Main App Interface Mockup */}
        <div className="max-w-6xl mx-auto">
          <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-[#e8f5e8] p-8">
                {/* App Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#0e7b5d] rounded-lg"></div>
                    <span className="text-lg font-semibold text-[#07130e]">HERBOID Analysis</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Panel - Plant Information */}
                  <div className="lg:col-span-1">
                    <Card className="bg-white rounded-xl shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#07130e] mb-4">Plant Analysis</h3>
                        
                        {/* Plant Image Placeholder */}
                        <div className="w-full h-32 bg-[#0e7b5d] rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-white text-sm">Plant Image</span>
                        </div>
                        
                        {/* Plant Details */}
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Scientific Name:</span>
                            <span className="text-sm font-medium">Echinacea purpurea</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Common Name:</span>
                            <span className="text-sm font-medium">Purple Coneflower</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Family:</span>
                            <span className="text-sm font-medium">Asteraceae</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center Panel - Compound Analysis */}
                  <div className="lg:col-span-1">
                    <Card className="bg-white rounded-xl shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#07130e] mb-4">Compound Breakdown</h3>
                        
                        {/* Compound Charts/Data */}
                        <div className="space-y-4">
                          <div className="bg-[#f0f9f6] p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">Phenolic Compounds</span>
                              <span className="text-sm text-[#0e7b5d] font-bold">34.2%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-[#0e7b5d] h-2 rounded-full" style={{width: '34.2%'}}></div>
                            </div>
                          </div>
                          
                          <div className="bg-[#f0f9f6] p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">Alkaloids</span>
                              <span className="text-sm text-[#0e7b5d] font-bold">12.8%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-[#0e7b5d] h-2 rounded-full" style={{width: '12.8%'}}></div>
                            </div>
                          </div>
                          
                          <div className="bg-[#f0f9f6] p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">Flavonoids</span>
                              <span className="text-sm text-[#0e7b5d] font-bold">28.5%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-[#0e7b5d] h-2 rounded-full" style={{width: '28.5%'}}></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Right Panel - Comparison Results */}
                  <div className="lg:col-span-1">
                    <Card className="bg-white rounded-xl shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#07130e] mb-4">Pharma Comparison</h3>
                        
                        {/* Comparison List */}
                        <div className="space-y-3">
                          <div className="border-l-4 border-[#0e7b5d] pl-3 py-2">
                            <div className="font-medium text-sm">Ibuprofen</div>
                            <div className="text-xs text-gray-600">87% similarity</div>
                            <div className="text-xs text-[#0e7b5d]">Anti-inflammatory</div>
                          </div>
                          
                          <div className="border-l-4 border-yellow-500 pl-3 py-2">
                            <div className="font-medium text-sm">Aspirin</div>
                            <div className="text-xs text-gray-600">72% similarity</div>
                            <div className="text-xs text-yellow-600">Pain relief</div>
                          </div>
                          
                          <div className="border-l-4 border-blue-500 pl-3 py-2">
                            <div className="font-medium text-sm">Acetaminophen</div>
                            <div className="text-xs text-gray-600">65% similarity</div>
                            <div className="text-xs text-blue-600">Fever reduction</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="flex justify-center space-x-4 mt-8">
                  <button className="bg-[#0e7b5d] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#0c6b4d] transition-colors">
                    Export Report
                  </button>
                  <button className="border-2 border-[#0e7b5d] text-[#0e7b5d] px-6 py-3 rounded-xl font-medium hover:bg-[#0e7b5d] hover:text-white transition-colors">
                    Save to Blockchain
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
