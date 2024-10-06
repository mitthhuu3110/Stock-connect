// import React from 'react';

// const ProductCard = ({ name, image }) => {
//   return (
//     <div className={`flex flex-col ${image ? 'w-[67%]' : 'w-[33%]'} max-md:ml-0 max-md:w-full`}>
//       {image ? (
//         <img
//           loading="lazy"
//           src={image}
//           alt={name}
//           className={`object-contain ${
//             image === 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb7633e9e3272db3483f3fddc5252a3bead7bc31d054d432a1e1c9b7b24bf248?placeholderIfAbsent=true&apiKey=c00c24771dc34f8d8a6d7388a68f43b1'
//               ? 'grow shrink-0 w-52 max-w-full bg-blend-darken aspect-[1.34]'
//               : 'w-full bg-blend-darken aspect-[2.15]'
//           } max-md:mt-5`}
//         />
//       ) : (
//         <div className="flex flex-col text-3xl text-black whitespace-nowrap max-md:mt-10">
//           <div className="flex shrink-0 rounded-xl bg-zinc-300 h-[101px]" />
//           <div className="self-center mt-2.5">{name}</div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductCard;

import React from 'react';

const ProductCard = ({ name, price, change }) => {  //Destructure props
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Rs. {price}</p>
      <p>{change}</p>
    </div>
  );
};

export default ProductCard;
