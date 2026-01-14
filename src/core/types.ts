export type AlgorithmStep =
  | { type: "compare"; indices: [number, number]; timestamp: number }
  | {
      type: "swap";
      indices: [number, number];
      values: [any, any];
      timestamp: number;
    }
  | { type: "set"; index: number; value: any; timestamp: number }
  | { type: "mark-sorted"; index: number; timestamp: number }
  | { type: "variable-update"; name: string; value: any; timestamp: number }
  | { type: "highlight-line"; lineNumber: number; timestamp: number }
  | { type: "add-node"; id: string; value: any; x?: number; y?: number; color?: string; timestamp: number }
  | { type: "add-edge"; id: string; source: string; target: string; timestamp: number }
  | { type: "remove-edge"; id: string; timestamp: number }
  | { type: "highlight-node"; id: string; timestamp: number };

export type Trace = AlgorithmStep[];

export interface GraphNode {
    id: string;
    value: any;
    x: number;
    y: number;
    color?: string; // For Red-Black trees etc.
}

export interface GraphEdge {
    id: string;
    source: string;
    target: string;
}

export interface VisualState {
  array: (number | string)[];
  highlightedIndices: (number | string)[]; // e.g. currently compared
  sortedIndices: number[];
  variables: Record<string, any>;
  activeLine: number;
  itemIds?: string[]; // Unique IDs for tracking element movement

  // Graph Support
  graph: {
      nodes: GraphNode[];
      edges: GraphEdge[];
  };
}
