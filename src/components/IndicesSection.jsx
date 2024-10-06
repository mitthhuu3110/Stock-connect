// import React from 'react';
// import IndexCard from './IndexCard';

// const IndicesSection = () => {
//   const indices = [
//     { name: 'Nifty', value: '25801.65', change: '-9.40', percentage: '0.4%' },
//     { name: 'SENSEX', value: '25801.65', change: '-9.40', percentage: '0.4%' },
//     { name: 'Bank Nifty', value: '25801.65', change: '-9.40', percentage: '0.4%' },
//   ];

//   return (
//     <section>
//       <h2 className="mt-20 ml-14 text-3xl text-black max-md:mt-10 max-md:ml-2.5">Indices</h2>
//       <div className="mt-11 ml-16 max-w-full w-[881px] max-md:mt-10">
//         <div className="flex gap-5 max-md:flex-col">
//           {indices.map((index, i) => (
//             <IndexCard key={i} {...index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IndicesSection;

import React from 'react';

const IndicesSection = () => {
  return (
    <section className="indices-section">
      <h2>Indices</h2>
      <div className="indices-container">
        <div className="index-item">
          <p>Nifty: 25801.65 (-9.40)</p>
        </div>
        <div className="index-item">
          <p>SENSEX: 25801.65 (-9.40)</p>
        </div>
        <div className="index-item">
          <p>Bank Nifty: 25801.65 (-9.40)</p>
        </div>
      </div>
    </section>
  );
};

export default IndicesSection;
