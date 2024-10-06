// import React from 'react';

// const CategoryTabs = () => {
//   const categories = ['Stocks', 'Mutual Funds', 'F&O'];

//   return (
//     <nav className="flex flex-wrap gap-5 justify-between mt-14 ml-11 max-w-full text-3xl text-white w-[731px] max-md:mt-10">
//       {categories.map((category, index) => (
//         <a
//           key={index}
//           href={`#${category.toLowerCase().replace(' ', '-')}`}
//           className="px-14 pb-4 whitespace-nowrap bg-gray-500 rounded-xl max-md:px-5"
//         >
//           {category}
//         </a>
//       ))}
//     </nav>
//   );
// };

// export default CategoryTabs;

import React from 'react';

const CategoryTabs = () => {
  return (
    <div className="category-tabs">
      <button>Stocks</button>
      <button>Mutual Funds</button>
      <button>F&O</button>
    </div>
  );
};

export default CategoryTabs;
