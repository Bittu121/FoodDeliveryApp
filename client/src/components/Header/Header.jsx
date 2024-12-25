// import React from "react";
// import "./Header.css";

// function Header() {
//   return (
//     <>
//       <div className="header">
//         <div className="header-contents">
//           <h2>Order your favorite food now</h2>
//           <p>
//             Choose from a menu of delicious dishes made with the finest
//             ingredients.
//           </p>
//           <button>View Menu</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;
import React, { useEffect, useState } from "react";
import { WiStars } from "react-icons/wi";
import "./Header.css";

function Header() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const snowflakesCount = 30;
    let newSnowflakes = [];

    for (let i = 0; i < snowflakesCount; i++) {
      newSnowflakes.push({
        id: i,
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 5 + 5}s`,
      });
    }

    setSnowflakes(newSnowflakes);

    return () => {
      setSnowflakes([]);
    };
  }, []);

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite food now</h2>
        <p>
          Choose from a menu of delicious dishes made with the finest
          ingredients.
        </p>
        {/* <button>View Menu</button> */}
      </div>

      {/* Render snowflakes */}
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="snowflake"
          style={{
            left: snowflake.left,
            animationDuration: snowflake.animationDuration,
          }}
        >
          <WiStars />
        </div>
      ))}
    </div>
  );
}

export default Header;
