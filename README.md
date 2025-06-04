# Modified SAR Routing Algorithms

A Next.js application implementing enhanced Search and Rescue (SAR) routing algorithms with interactive visualization and comparison capabilities. Features modified versions of Dijkstra's and Bellman-Ford algorithms optimized for emergency response scenarios.

## 📋 Overview

This project provides an interactive platform for studying and comparing classical routing algorithms with their Search and Rescue (SAR)-optimized variants. The application visualizes how security considerations affect routing decisions in emergency network scenarios.

### Key Differentiators

- **Security-Aware Routing**: Algorithms consider both distance and security risk factors
- **Interactive Visualization**: Real-time algorithm execution with step-by-step analysis
- **Comparative Analysis**: Side-by-side comparison of classical vs SAR algorithm performance
- **Network Simulation**: Interactive topology creation and manipulation

## 🧮 Implemented Algorithms

### Modified Dijkstra's Algorithm
- **Classic Mode**: Traditional shortest path calculation
- **SAR Mode**: Multi-objective optimization considering:
  - Distance weights (α factor)
  - Security risk weights (β factor)
  - Emergency priority handling
- **Features**:
  - Priority queue visualization
  - Step-by-step execution
  - Path highlighting and comparison
  - Interactive node and edge creation

### Modified Bellman-Ford Algorithm
- **Classic Mode**: Standard distance-vector algorithm
- **SAR Mode**: Enhanced with security risk assessment
- **Features**:
  - Distributed network optimization
  - Negative cycle detection
  - Edge relaxation visualization
  - Multi-iteration convergence analysis

## ✨ Core Features

### Interactive Visualization
- **React Flow Integration**: Dynamic network topology visualization
- **Real-time Algorithm Execution**: Step-by-step algorithm progression
- **Node Management**: Add routers and switches dynamically
- **Edge Configuration**: Custom weights and security risk levels

### Algorithm Comparison
- **Dual-Mode Execution**: Run both classic and SAR versions
- **Metrics Analysis**: Distance, security risk, and hop count comparison
- **Trade-off Visualization**: Security vs efficiency analysis
- **Full Network Analysis**: Compare paths to all destinations

### User Interface
- **Professional Dashboard**: Clean, intuitive interface
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Interactive Controls**: Play, pause, step-through, and reset functionality
- **Real-time Feedback**: Comprehensive logging and status updates

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Visualization**: React Flow, Lucide Icons
- **Styling**: Tailwind CSS, Radix UI components
- **State Management**: React Hooks, Context API
- **Development**: ESLint, PostCSS

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/nerdylua/Modified-SAR-Routing-algorithms
cd Modified-SAR-routing-algorithms

# Install dependencies
npm install

# Run development server
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 📊 Algorithm Configuration

### Security Risk Levels
The application uses predefined security risk categories:

| Level | Risk Factor | Description |
|-------|-------------|-------------|
| Low | 0.1 | Secure, trusted connections |
| Medium-Low | 0.3 | Generally safe with minor concerns |
| Medium | 0.5 | Moderate security concerns |
| Medium-High | 0.7 | Notable security issues |
| High | 0.8 | Significant vulnerabilities |
| Critical | 0.9 | Severe security threats |

### Algorithm Parameters
- **Alpha (α)**: Distance weight factor (1 - β)
- **Beta (β)**: Security risk weight factor (0-1)
- **Classic Mode**: β = 0 (security ignored)
- **SAR Mode**: β > 0 (security considered)

## 🎯 Use Cases

### Educational
- **Algorithm Learning**: Understand routing algorithm mechanics
- **Comparative Studies**: Analyze classical vs security-aware approaches
- **Network Analysis**: Study trade-offs in routing decisions

### Research
- **SAR Optimization**: Emergency response network planning
- **Security Analysis**: Impact of security considerations on routing
- **Performance Metrics**: Algorithm efficiency comparison

## 📈 Performance Metrics

The application tracks and displays:

- **Path Distance**: Total edge weights in optimal path
- **Security Risk**: Cumulative security exposure
- **Hop Count**: Number of intermediate nodes
- **Convergence Time**: Algorithm execution steps
- **Trade-off Analysis**: Security improvement vs distance cost

## 🌟 Project Structure

```
├── app/                    # Next.js app directory
│   ├── (default)/         # Main application routes
│   │   ├── routing-algorithms/  # Algorithm simulators
│   │   └── topology/      # Network topology editor
├── components/            # React components
│   ├── routing-algorithms/ # Algorithm-specific components
│   ├── topology/         # Topology editor components
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions and contexts
└── public/               # Static assets
```

**Built with ❤️ for the SAR and network research community**
