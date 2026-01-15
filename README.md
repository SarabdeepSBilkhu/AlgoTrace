# AlgoTrace - Advanced Algorithm Visualizer 🚀

**AlgoTrace** is a next-generation algorithm visualizer built with **React**, **TypeScript**, and **Framer Motion**. It features a "Time-Travel" debugging engine that allows you to step forward, backward, and scrub through the execution of complex algorithms deterministically.

## ✨ Key Features

- **🕰️ Deterministic Time-Travel**: Record every step of an algorithm's execution (Comparisons, Swaps, node visits) and replay it instantly. Scrub through the timeline with zero latency.
- **🎨 Multi-Structure Visualization**:
  - **Array Visualizer**: Beautiful, animated bar charts for sorting algorithms.
  - **Graph/Tree Visualizer**: Force-directed graphs and tree layouts for non-linear structures.
- **💻 Integrated Code Editor**:
  - Full-featured **Monaco Editor** (VS Code engine).
  - Write and execute your own **JavaScript** code directly in the browser.
  - Syntax highlighting for Python, Java, and C++ (Reference modes).
- **💎 Modern Aesthetic**:
  - "Dark Glass" theme with glassmorphism cards and glowing accents.
  - Smooth, spring-based animations powered by Framer Motion.
- **📦 Comprehensive Library**:
  - **Sorting**: Bubble, Selection, Insertion, Merge, Quick, Heap.
  - **Trees**: BST, AVL, Red-Black, Splay.
  - **Graphs**: (Coming Soon: BFS, DFS, Dijkstra).

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Vanilla CSS (Variables, Glassmorphism), Framer Motion
- **Editor**: @monaco-editor/react
- **Engine**: Custom Proxy-based JS Execution Engine

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/algotrace.git
    cd algotrace
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Run the development server**:

    ```bash
    npm run dev
    ```

4.  Open `http://localhost:5173` in your browser.

## 🎮 Usage

1.  **Select an Algorithm**: Use the dropdown menu to choose from Sorting or Tree algorithms.
2.  **Choose Language**: Toggle between JavaScript (Runnable), Python, Java, or C++ to see reference implementations.
3.  **Input Data**: Enter your own comma-separated numbers or hit the **🎲 Randomize** button.
4.  **Run**: Click **Run Code** to compile and generate the trace.
5.  **Control**: Use the playback bar to Play (`▶`), Pause (`⏸`), Reset (`⏹`), or scrub through the definition of the algorithm.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
