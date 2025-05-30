
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// FIX: Define interfaces for D3 node and link structures for better type safety
interface D3Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface D3Link {
  source: D3Node;
  target: D3Node;
  opacity: number;
}

interface NetworkAnimationProps {
  width?: number;
  height?: number;
  nodeCount?: number;
  theme: 'light' | 'dark';
}

const NetworkAnimation: React.FC<NetworkAnimationProps> = ({ width = 600, height = 400, nodeCount = 50, theme }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove(); // Clear previous animation

    const nodes: D3Node[] = Array.from({ length: nodeCount }, (_, i) => ({ id: i, x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5 }));
    
    const nodeColor = theme === 'light' ? "rgba(59, 130, 246, 0.6)" : "rgba(96, 165, 250, 0.6)"; // blue-500/600 with opacity
    // FIX: Corrected variable declaration from 'constlinkColor' to 'const linkColor'
    const linkColor = theme === 'light' ? "rgba(59, 130, 246, 0.2)" : "rgba(96, 165, 250, 0.2)";

    const linksGroup = svg.append("g");
    const nodesGroup = svg.append("g");

    const nodeElements = nodesGroup.selectAll("circle")
      .data(nodes)
      .enter().append("circle")
        .attr("r", d => 2 + Math.random() * 3)
        .attr("fill", nodeColor);

    function updateLinks() {
      const validNodes = nodes.filter(n => !isNaN(n.x) && !isNaN(n.y));
      if (validNodes.length < 2) return [];

      const delaunay = d3.Delaunay.from(validNodes, d => d.x, d => d.y);
      const voronoi = delaunay.voronoi([0, 0, width, height]);
      const links: { source: D3Node; target: D3Node; opacity: number }[] = []; // Initialize with specific type

      for (const edge of voronoi.cellPolygons()) {
          if (!edge) continue;
          for (let i = 0, n = edge.length; i < n; ++i) {
              const p0 = edge[i];
              const p1 = edge[(i + 1) % n];
              // Ensure p0 and p1 are valid points (arrays of two numbers)
              if (p0 && p1 && p0.length === 2 && p1.length === 2) {
                  // Find nodes associated with this edge (simplified)
                  // This is a simplification; proper Voronoi links are between circumcenters
                  // For a visual effect, connect nearby nodes within a threshold
                  const sourceNode = validNodes[edge.index]; // Example association
                  if(sourceNode){
                     validNodes.forEach(targetNode => {
                         if(sourceNode.id !== targetNode.id){
                             const dist = Math.hypot(sourceNode.x - targetNode.x, sourceNode.y - targetNode.y);
                             if(dist < 80 + Math.random() * 40){ // Connection threshold
                                 links.push({source: sourceNode, target: targetNode, opacity: 1 - (dist / 120)});
                             }
                         }
                     });
                  }
              }
          }
      }
      // Deduplicate links (simple way, could be more efficient)
      const uniqueLinks = Array.from(new Set(links.map(l => JSON.stringify({s: Math.min(l.source.id, l.target.id), t: Math.max(l.source.id, l.target.id)}))))
                             .map(s => JSON.parse(s) as {s: number, t: number}) // Type intermediate object
                             .map(ul => {
                                const source = nodes.find(n => n.id === ul.s);
                                const target = nodes.find(n => n.id === ul.t);
                                if (source && target) {
                                    const dist = Math.hypot(source.x - target.x, source.y - target.y);
                                    return {source, target, opacity: Math.max(0, 1 - (dist/120))};
                                }
                                return null;
                             })
                             // FIX: Use a type guard to correctly type the filtered array
                             .filter((l): l is D3Link => l !== null);


      linksGroup.selectAll("line")
        // FIX: Explicitly type 'd' in D3 data key function to resolve 'unknown' type and property access errors.
        .data(uniqueLinks, (d: D3Link) => `${d.source.id}-${d.target.id}`)
        .join(
          // FIX: Explicitly type 'd' in D3 join enter function callbacks.
          enter => enter.append("line")
            .attr("stroke", linkColor) // This line will now work as linkColor is correctly defined.
            .attr("stroke-width", 0.5)
            .attr("stroke-opacity", (d: D3Link) => d.opacity)
            .attr("x1", (d: D3Link) => d.source.x)
            .attr("y1", (d: D3Link) => d.source.y)
            .attr("x2", (d: D3Link) => d.target.x)
            .attr("y2", (d: D3Link) => d.target.y),
          // FIX: Explicitly type 'd' in D3 join update function callbacks.
          update => update
            .attr("x1", (d: D3Link) => d.source.x)
            .attr("y1", (d: D3Link) => d.source.y)
            .attr("x2", (d: D3Link) => d.target.x)
            .attr("y2", (d: D3Link) => d.target.y)
            .attr("stroke-opacity", (d: D3Link) => d.opacity),
          exit => exit.remove()
        );
    }
    
    function tick() {
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Clamp positions to be safe
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
      });

      nodeElements
        .attr("cx", (d: D3Node) => d.x) // Explicitly type d
        .attr("cy", (d: D3Node) => d.y); // Explicitly type d
      
      updateLinks();
    }

    const timer = d3.timer(tick);
    return () => timer.stop();

  }, [width, height, nodeCount, theme]);

  return <svg ref={ref} width={width} height={height} className="opacity-50 dark:opacity-30" />;
};

export default NetworkAnimation;