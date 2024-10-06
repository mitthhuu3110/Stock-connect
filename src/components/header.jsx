// import React from 'react';
// import SearchBar from './SearchBar';
// import UserProfile from './UserProfile';

// const Header = () => {
//   return (
//     <header className="flex gap-7 items-center max-md:max-w-full">
//       <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9820ae616e343314d26b8f98a1f6540d7cdbeec77ba3aab725350dd9d4f6803?placeholderIfAbsent=true&apiKey=c00c24771dc34f8d8a6d7388a68f43b1" alt="" className="object-contain shrink-0 self-stretch max-w-full rounded-xl aspect-[3.32] w-[292px]" />
//       <nav>
//         <ul className="flex gap-7 items-center">
//           <li className="self-stretch my-auto text-3xl text-black bg-blend-normal">
//             <a href="#explore">Explore</a>
//           </li>
//           <li className="self-stretch my-auto text-3xl text-black bg-blend-normal basis-auto">
//             <a href="#dashboard">Dashboard</a>
//           </li>
//         </ul>
//       </nav>
//       <SearchBar />
//       <UserProfile />
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import SearchBar from './SearchBar'; // Assuming you have a SearchBar component
import CartIcon from './CartIcon'; // Placeholder - replace with your icon component
import BellIcon from './BellIcon'; // Placeholder - replace with your icon component
import UserIcon from './UserIcon'; // Placeholder - replace with your icon component

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        {/* Logo or app name here */}
        <h1>Stock Connect</h1>
      </div>
      <div className="header-right">
        <SearchBar />
        <CartIcon />
        <BellIcon />
        <UserIcon />
      </div>
    </header>
  );
};

export default Header;
