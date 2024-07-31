//sparkle effect upper half

// export default function SparkleEffect(){
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//       {Array.from({ length: 300 }).map((_, i) => (
//         <div
//           key={i}
//           className="absolute bg-white rounded-full animate-sparkle"
//           style={{
//             width: Math.random() * 2 + 'px',
//             height: Math.random() * 2 + 'px',
//             top: Math.random() * 100 + '%',
//             left: Math.random() * 100 + '%',
//             opacity: Math.random() * 0.5 + 0.5,
//             animationDuration: `${Math.random() * 2 + 1}s`, // Random duration between 1s and 3s
//             animationDelay: `${Math.random() * 2}s`, // Random delay to create staggered effect
//           }}
//         ></div>
//       ))}
//     </div>
//   );

// };




// Sparkle Effect whole page

export default function SparkleEffect(){
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 300 }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-sparkle"
          style={{
            width: Math.random() * 2 + 'px',
            height: Math.random() * 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: `${Math.random() * 2 + 1}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        ></div>
      ))}
    </div>
  );

};




// Snow Effect

// export default function SparkleEffect(){
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none z-0"> {/* Set z-index to 0 */}
//     {Array.from({ length: 300 }).map((_, i) => (
//       <div
//         key={i}
//         className="absolute bg-white rounded-full animate-fall"
//         style={{
//           width: Math.random() * 2 + 'px',
//           height: Math.random() * 2 + 'px',
//           top: Math.random() * 100 + '%',
//           left: Math.random() * 100 + '%',
//           opacity: Math.random() * 0.5 + 0.5,
//           animationDuration: `${Math.random() * 3 + 2}s`, // Random duration between 2s and 5s
//         }}
//       ></div>
//     ))}
//   </div>
// );
// };

