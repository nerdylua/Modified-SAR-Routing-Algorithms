'use client';

import { TopologyEditor } from '@/components/topology/topology-editor';
import { EventLog } from '@/components/simulation/event-log';
import { RunHistory } from '@/components/simulation/run-history';
import { SimulationStatusBanner } from '@/components/simulation/SimulationStatusBanner';
import AttackerInfoCard from '@/components/simulation/attacker-info-card';
import { SimulationProvider } from '@/lib/contexts/simulation-context';
import { Construction, Clock, Wrench, X } from 'lucide-react';
import { useState } from 'react';

export default function TopologyPage() {
  const [maintenanceState, setMaintenanceState] = useState<'maximized' | 'minimized'>('maximized');

  return (
    <div className="relative">
      {/* Original page content - completely non-interactive */}
      <div className="pointer-events-none select-none transition-opacity duration-300">
        <div className="container mx-auto p-6 space-y-6 flex flex-col h-full">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold tracking-tight">Topology Editor & Simulation</h1>
            <p className="text-muted-foreground">
              Create topology, submit to start simulation, and view live events below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-shrink-0">
            <div className="lg:col-span-2 h-20">
              <SimulationStatusBanner />
            </div>
            <div className="lg:col-span-2 h-20">
              <AttackerInfoCard />
            </div>
          </div>

          <div className="flex-shrink-0 h-[500px] w-full">
            <TopologyEditor />
          </div>

          <div className="flex-shrink-0 py-4">
            <hr />
          </div>

          <div className="flex-grow grid md:grid-cols-2 gap-6 min-h-0">
            <div className="h-full">
              <RunHistory />
            </div>
            <div className="h-full">
              <EventLog />
            </div>
          </div>
        </div>
      </div>

      {/* Maximized maintenance overlay */}
      {maintenanceState === 'maximized' && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-2xl max-w-lg w-full mx-auto p-6 space-y-4 relative">
            {/* Minimize button */}
            <button
              onClick={() => setMaintenanceState('minimized')}
              className="absolute top-3 right-3 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              title="Minimize maintenance banner"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>

            {/* Animated maintenance icon */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center shadow-lg">
                  <Construction className="w-8 h-8 text-orange-600 animate-bounce" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  <Wrench className="w-2.5 h-2.5 text-yellow-800" />
                </div>
              </div>
            </div>

            {/* Main heading */}
            <div className="text-center space-y-1">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                Under Maintenance
              </h1>
              <h2 className="text-base font-semibold text-gray-700">
                Topology Editor & Simulation
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-3 text-gray-600 text-center">
              <p className="text-sm leading-relaxed">
                We're performing scheduled maintenance to enhance the Topology Editor with improved capabilities.
              </p>
              <div className="flex items-center justify-center space-x-2 text-xs">
                <Clock className="w-3 h-3" />
                <span>Estimated completion: In progress</span>
              </div>
            </div>

            {/* Alternative suggestion */}
            <div className="bg-gradient-to-r from-green-50/80 to-emerald-50/80 border border-green-200/50 rounded-lg p-4 text-center">
              <h3 className="text-sm font-semibold text-green-900 mb-2">
                Try our enhanced routing algorithms!
              </h3>
              <a 
                href="/routing-algorithms" 
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md text-xs"
              >
                Explore Routing Algorithms
                <svg className="ml-1.5 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Bottom note */}
            <div className="text-center text-xs text-gray-500 border-t border-gray-200/50 pt-3">
              <p>Click × to minimize this banner</p>
            </div>
          </div>
        </div>
      )}

      {/* Minimized floating maintenance banner */}
      {maintenanceState === 'minimized' && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setMaintenanceState('maximized')}
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 transition-all duration-200 hover:scale-105"
          >
            <Construction className="w-4 h-4 animate-bounce" />
            <span className="text-sm font-medium">Under Maintenance</span>
          </button>
        </div>
      )}
    </div>
  );
}
