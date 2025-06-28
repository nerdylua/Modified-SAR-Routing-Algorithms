'use client';

import React from 'react';
import { EdgeLabelRenderer, EdgeProps, getBezierPath, MarkerType } from 'reactflow';
import { SimulationEdgeData } from './types'; // Import specific data type
import { cn } from '@/lib/utils'; // Import cn

// Helper function to get security risk color
const getSecurityRiskColor = (securityRisk: number = 0) => {
  if (securityRisk <= 0.2) return 'stroke-green-500'; // Low risk - green
  if (securityRisk <= 0.4) return 'stroke-yellow-500'; // Medium-low risk - yellow
  if (securityRisk <= 0.6) return 'stroke-orange-500'; // Medium risk - orange
  if (securityRisk <= 0.8) return 'stroke-red-500'; // High risk - red
  return 'stroke-red-700'; // Critical risk - dark red
};

// Helper function to get security risk text color
const getSecurityRiskTextColor = (securityRisk: number = 0) => {
  if (securityRisk <= 0.2) return 'text-green-700 border-green-300 bg-green-50';
  if (securityRisk <= 0.4) return 'text-yellow-700 border-yellow-300 bg-yellow-50';
  if (securityRisk <= 0.6) return 'text-orange-700 border-orange-300 bg-orange-50';
  if (securityRisk <= 0.8) return 'text-red-700 border-red-300 bg-red-50';
  return 'text-red-800 border-red-400 bg-red-100';
};

// Helper function to get stroke width based on risk
const getStrokeWidth = (securityRisk: number = 0, isHighlighted: boolean = false) => {
  const baseWidth = isHighlighted ? 3 : 1.5;
  const riskWidth = securityRisk > 0.6 ? 0.5 : 0; // Thicker for high risk
  return baseWidth + riskWidth;
};
export function NetworkEdge({ 
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  label,
  data // Use SimulationEdgeData type
}: EdgeProps<SimulationEdgeData>) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const isHighlighted = data?.isHighlighted;
  const securityRisk = data?.securityRisk || 0;
  const isPath = data?.isPath;
  
  // Calculate colors and styles based on security risk
  const riskColor = getSecurityRiskColor(securityRisk);
  const strokeWidth = getStrokeWidth(securityRisk, isHighlighted);
  const opacity = isPath ? 1 : 0.8;

  return (
    <>
      {/* Use path directly, styled with cn like topology/custom-edges.tsx */}
      <path
        id={id}
        className={cn(
          'react-flow__edge-path fill-none transition-all duration-300 ease-in-out',
          isHighlighted || isPath
            ? riskColor // Use risk-based color when highlighted/path
            : 'stroke-muted-foreground/60', // Default color when not active
          // Add pulsing animation for critical risk paths
          securityRisk > 0.8 && (isHighlighted || isPath) && 'animate-pulse'
        )}
        d={edgePath}
        style={{
          strokeWidth,
          opacity,
          ...style
        }}
        markerEnd={markerEnd}
      />
      
      {/* Security risk indicator overlay for high-risk edges */}
      {securityRisk > 0.6 && (isHighlighted || isPath) && (
        <path
          className="react-flow__edge-path fill-none stroke-red-600/30"
          d={edgePath}
          style={{
            strokeWidth: strokeWidth + 2,
            strokeDasharray: '5,5',
            animation: 'dash 2s linear infinite',
          }}
        />
      )}

      <EdgeLabelRenderer>
        {label && (
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: 'all',
            }}
            className="nodrag nopan"
          >
            {/* Main label showing weight */}
            <div
              className={cn(
                "px-1.5 py-0.5 rounded text-[10px] font-medium",
                "border backdrop-blur-sm",
                isHighlighted || isPath
                  ? getSecurityRiskTextColor(securityRisk)
                  : "bg-background/90 border-border/50 text-muted-foreground"
              )}
            >
              {label}
            </div>
            
            {/* Security risk indicator badge */}
            {(isHighlighted || isPath) && securityRisk > 0 && (
              <div
                className={cn(
                  "mt-0.5 px-1 py-0.5 rounded text-[8px] font-bold text-center",
                  "border backdrop-blur-sm",
                  getSecurityRiskTextColor(securityRisk)
                )}
                title={`Security Risk: ${(securityRisk * 100).toFixed(0)}%`}
              >
                Risk: {(securityRisk * 100).toFixed(0)}%
              </div>
            )}
          </div>
        )}
      </EdgeLabelRenderer>
      
      {/* Add keyframes for dash animation via style tag */}
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -10;
          }
        }
      `}</style>
    </>
  );
}

export const edgeTypes = {
  networkEdge: NetworkEdge,
}; 