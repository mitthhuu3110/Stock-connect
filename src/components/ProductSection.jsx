// import React from 'react';
// import ProductCard from './ProductCard';

// const ProductSection = () => {
//   const products = [
//     { name: 'Terminal', image: null },
//     { name: 'Product 2', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb7633e9e3272db3483f3fddc5252a3bead7bc31d054d432a1e1c9b7b24bf248?placeholderIfAbsent=true&apiKey=c00c24771dc34f8d8a6d7388a68f43b1' },
//     { name: 'Product 3', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8a119a1c38d7603ce0c19e6576bc17f8b1d5219088ef9471ee69eb464353dfae?placeholderIfAbsent=true&apiKey=c00c24771dc34f8d8a6d7388a68f43b1' },
//   ];

//   return (
//     <section>
//       <h2 className="mt-11 ml-14 text-3xl text-black max-md:mt-10 max-md:ml-2.5">Products</h2>
//       <div className="mt-9 ml-16 max-w-full w-[829px]">
//         <div className="flex gap-5 max-md:flex-col">
//           {products.map((product, index) => (
//             <ProductCard key={index} {...product} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductSection;

import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = () => {
  const products = [
    { name: 'Reliance Power', price: '50.95', change: '-2.69' },
    { name: 'Suzlon Energy', price: '50.95', change: '-2.69' },
    { name: 'Vodafone Idea', price: '50.95', change: '-2.69' },
    { name: 'IRFC', price: '50.95', change: '-2.69' },
  ];

  return (
    <section className="product-section">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;

