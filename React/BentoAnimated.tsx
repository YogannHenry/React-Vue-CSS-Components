//installer react, motion.dev

import React, { useState } from 'react';
import { motion } from 'motion/react';

// Interface pour une carte
interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
interface Layout {
  id: number;
  row: number;
  col: number;
  colSpan: number;
  rowSpan: number;
  bgColor: string;
}

// Composant Card
const Card = ({ children, style, onMouseEnter, onMouseLeave }: CardProps) => {
  return (
    <motion.div
      style={{
        border: '1px solid #000227',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#1a05b8',
        ...style,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      layout
      transition={{ duration: 2, type: 'spring' }}
    >
      {children}
    </motion.div>
  );
};

// Composant principal BentoGrid
const BentoGrid = () => {
  const initialGrid = [
    { id: 1, row: 1, col: 1, colSpan: 2, rowSpan: 2, bgColor: 'lightblue' },
    { id: 2, row: 1, col: 3, colSpan: 2, rowSpan: 2, bgColor: 'lightcoral' },
    { id: 3, row: 1, col: 5, colSpan: 2, rowSpan: 2, bgColor: 'lightgreen' },
    { id: 4, row: 3, col: 1, colSpan: 4, rowSpan: 2, bgColor: 'lightyellow' },
    { id: 5, row: 3, col: 5, colSpan: 2, rowSpan: 2, bgColor: 'lightblue' },
    { id: 6, row: 1, col: 7, colSpan: 2, rowSpan: 4, bgColor: 'lightcoral' },
  ];

  const [grid, setGrid] = useState(initialGrid);


  const layouts: { [key: number]: Layout[] } = {
    1: [
      { id: 1, row: 1, col: 1, colSpan: 4, rowSpan: 3, bgColor: 'lightblue' },
      { id: 2, row: 1, col: 5, colSpan: 1, rowSpan: 2, bgColor: 'lightcoral' },
      { id: 3, row: 1, col: 6, colSpan: 1, rowSpan: 2, bgColor: 'lightgreen' },
      { id: 4, row: 4, col: 1, colSpan: 4, rowSpan: 1, bgColor: 'lightyellow' },
      { id: 5, row: 3, col: 5, colSpan: 2, rowSpan: 2, bgColor: 'lightblue' },
      { id: 6, row: 1, col: 7, colSpan: 2, rowSpan: 4, bgColor: 'lightcoral' },
    ],
    2: [
      { id: 1, row: 1, col: 1, colSpan: 1, rowSpan: 3, bgColor: 'lightblue' },
      { id: 2, row: 1, col: 2, colSpan: 4, rowSpan: 3, bgColor: 'lightcoral' },
      { id: 3, row: 1, col: 6, colSpan: 1, rowSpan: 3, bgColor: 'lightgreen' },
      { id: 4, row: 4, col: 1, colSpan: 4, rowSpan: 1, bgColor: 'lightyellow' },
      { id: 5, row: 4, col: 5, colSpan: 2, rowSpan: 1, bgColor: 'lightblue' },
      { id: 6, row: 1, col: 7, colSpan: 2, rowSpan: 4, bgColor: 'lightcoral' },
    ],
    3: [
      { id: 1, row: 1, col: 1, colSpan: 2, rowSpan: 2, bgColor: 'lightblue' },
      { id: 2, row: 1, col: 3, colSpan: 2, rowSpan: 2, bgColor: 'lightcoral' },
      { id: 3, row: 1, col: 5, colSpan: 2, rowSpan: 3, bgColor: 'lightgreen' },
      { id: 4, row: 3, col: 1, colSpan: 4, rowSpan: 2, bgColor: 'lightyellow' },
      { id: 5, row: 4, col: 5, colSpan: 2, rowSpan: 1, bgColor: 'lightblue' },
      { id: 6, row: 1, col: 7, colSpan: 2, rowSpan: 4, bgColor: 'lightcoral' },
    ],
    4: [
      { id: 1, row: 1, col: 1, colSpan: 2, rowSpan: 2, bgColor: 'lightblue' },
      { id: 2, row: 1, col: 3, colSpan: 2, rowSpan: 2, bgColor: 'lightcoral' },
      { id: 3, row: 1, col: 5, colSpan: 2, rowSpan: 2, bgColor: 'lightgreen' },
      { id: 4, row: 3, col: 1, colSpan: 4, rowSpan: 2, bgColor: 'lightyellow' },
      { id: 5, row: 3, col: 5, colSpan: 2, rowSpan: 2, bgColor: 'lightblue' },
      { id: 6, row: 1, col: 7, colSpan: 2, rowSpan: 4, bgColor: 'lightcoral' },
    ],
    5: [
      { id: 1, row: 1, col: 1, colSpan: 2, rowSpan: 2, bgColor: 'lightblue' },
      { id: 2, row: 1, col: 3, colSpan: 2, rowSpan: 2, bgColor: 'lightcoral' },
      { id: 3, row: 1, col: 5, colSpan: 2, rowSpan: 1, bgColor: 'lightgreen' },
      { id: 4, row: 3, col: 1, colSpan: 4, rowSpan: 2, bgColor: 'lightyellow' },
      { id: 5, row: 2, col: 5, colSpan: 2, rowSpan: 3, bgColor: 'lightblue' },
      { id: 6, row: 1, col: 7, colSpan: 2, rowSpan: 4, bgColor: 'lightcoral' },
    ],
    6: [
      { id: 1, row: 1, col: 1, colSpan: 2, rowSpan: 2, bgColor: 'lightblue' },
      { id: 2, row: 1, col: 1, colSpan: 2, rowSpan: 2, bgColor: 'lightcoral' },
      { id: 3, row: 1, col: 1, colSpan: 2, rowSpan: 2, bgColor: 'lightgreen' },
      { id: 4, row: 3, col: 1, colSpan: 4, rowSpan: 2, bgColor: 'lightyellow' },
      { id: 5, row: 3, col: 5, colSpan: 2, rowSpan: 2, bgColor: 'lightblue' },
      { id: 6, row: 1, col: 1, colSpan: 8, rowSpan: 4, bgColor: 'lightcoral' },
    ],
  };

  const handleMouseEnter = (id: number) => {
    const newLayout = layouts[id];
    if (newLayout) {
      setGrid(newLayout);
    }
  };

  const handleMouseLeave = () => {
    setGrid(initialGrid); // Réinitialise la grille à sa disposition d'origine
  };

  return (
        <div style={{ width: '1550px', height: '650px', border: '1px solid #000227', borderRadius: "25px", marginBottom: 20 , }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)', // 4 colonnes
          gridTemplateRows: 'repeat(4, 1fr)', // 4 lignes
          gap: '20px', // Espacement entre les éléments de la grille
          height: '100%',
        backgroundColor: 'rgba(0, 14, 86, 0.348)',
        padding: '20px',
        borderRadius: "25px",

        }}
      >
        {grid.map(({ id, row, col, colSpan, rowSpan, bgColor }) => (
          <Card
            key={id}
            style={{
              gridColumn: `${col} / span ${colSpan}`,
              gridRow: `${row} / span ${rowSpan}`,
              backgroundColor: bgColor,
            }}
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave}
          >
            Card {id}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;