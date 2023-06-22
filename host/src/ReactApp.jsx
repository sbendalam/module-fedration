import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { createApp } from "vue";
// const MyButton = await import("vueRemote/Button"); // Replace "my_vue_app" with the name specified in your Vue config

import OtherButton from "remoteApp/Button";
import MyButton from "vueRemote/Button";
function ReactApp() {
  const [navFromVue, setnavFromVue] = useState("Home");
  const [cartItems, setCartItems] = useState([
    {
      itemName: "Luffy 5th gear action figure",
      id: 1,
      price: 1069,
      image:
        "https://th.bing.com/th/id/OIP.pBE7uGs4Pform7CAVs6qfAAAAA?w=208&h=208&c=7&r=0&o=5&pid=1.7",
    },
    {
      itemName: "Naruto large mousepad",
      price: 550,
      id: 2,

      image:
        "https://th.bing.com/th/id/OIP.Ql-4Rx3ZSBIaaX4DWO32mQHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7",
    },
    {
      itemName: "HxH Hisoka figure ",
      price: 570,
      id: 3,
      image:
        "https://th.bing.com/th/id/OIP.qSRKG2-5JOa-jfO36xLbjgHaJ4?w=152&h=203&c=7&r=0&o=5&pid=1.7",
    },
    {
      itemName: "spy x family merchandise",
      price: 250,
      id: 4,
      image:
        "https://th.bing.com/th/id/OIP.teWnuqERgmS-vQreRfTUOAHaHa?w=213&h=213&c=7&r=0&o=5&pid=1.7",
    },
    {
      itemName: "solo leveling sung jin woo toy",
      price: 570,
      id: 5,
      image:
        "https://th.bing.com/th/id/OIP.UmHT34KpnxxsXdKdFMTFLQAAAA?w=190&h=285&c=7&r=0&o=5&pid=1.7",
    },
    {
      itemName: "Zoro one-piece ",
      price: 250,
      id: 6,
      image:
        "https://ae01.alicdn.com/kf/HTB1lKzOekfb_uJkHFqDq6xVIVXaG/ZXZ-Anime-One-Piece-Roronoa-Zoro-Figurine-Japanese-One-Piece-Zoro-PVC-17CM-Action-Figure-Combat.jpg",
    },
  ]);
  const [allItems, setAllItems] = useState([
    {
      itemName: "Luffy 5th gear action figure",
      id: 1,
      price: 1069,
      image:
        "https://th.bing.com/th/id/OIP.pBE7uGs4Pform7CAVs6qfAAAAA?w=208&h=208&c=7&r=0&o=5&pid=1.7",
    },
    {
      itemName: "Naruto large mousepad",
      price: 550,
      id: 2,

      image:
        "https://th.bing.com/th/id/OIP.Ql-4Rx3ZSBIaaX4DWO32mQHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7",
    },
    {
      itemName: "HxH Hisoka figure ",
      price: 570,
      id: 3,
      image:
        "https://th.bing.com/th/id/OIP.qSRKG2-5JOa-jfO36xLbjgHaJ4?w=152&h=203&c=7&r=0&o=5&pid=1.7",
    },
    {
      itemName: "spy x family merchandise",
      price: 250,
      id: 4,
      image:
        "https://th.bing.com/th/id/OIP.teWnuqERgmS-vQreRfTUOAHaHa?w=213&h=213&c=7&r=0&o=5&pid=1.7",
    },
    {
      itemName: "solo leveling sung jin woo toy",
      price: 570,
      id: 5,
      image:
        "https://th.bing.com/th/id/OIP.UmHT34KpnxxsXdKdFMTFLQAAAA?w=190&h=285&c=7&r=0&o=5&pid=1.7",
    },
    {
      itemName: "Zoro one-piece ",
      price: 250,
      id: 6,
      image:
        "https://ae01.alicdn.com/kf/HTB1lKzOekfb_uJkHFqDq6xVIVXaG/ZXZ-Anime-One-Piece-Roronoa-Zoro-Figurine-Japanese-One-Piece-Zoro-PVC-17CM-Action-Figure-Combat.jpg",
    },
  ]);
  const VueRef = useRef(null);
  function changeCount(val) {
    console.log(val);
    setCartItems(val);
  }
  function onSubmit(){
    setCartItems([])
    alert("Order on its way")
  }
  // useEffect()
   function loadVueComponent(tempApp) {

    tempApp = createApp(MyButton, {
      propCartItems: cartItems || [],
      onCartChange: changeCount,
      onSubmit:onSubmit
    });
    tempApp.mount(VueRef?.current);
  }
  useEffect(() => {
    let tempApp;

    if (tempApp?.current) {
      tempApp?.current?.unmount();
    }
    loadVueComponent(tempApp);

    return () => {
      tempApp?.unmount();
    };
  }, [cartItems]);
  const isInCart = (item) => {
    let isIn = cartItems.filter((cartItem) => cartItem.id == item.id);
    if (isIn.length > 0) return true;
    else false;
  };
  const addToCart = (item) => {
    setCartItems([...cartItems,item])
  
  };
  const removeFromCart = (item) => {
    let newItems = cartItems.filter((cartItem) => cartItem.id != item.id);
   setCartItems(newItems)
  };
  return (
    <div className="flex h-full w-full overflow-hidden">
      
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 overflow-y-auto relative mt-3 p-5">
        {allItems.map((item) => {
          return (
            <div className="flex shadow-md flex-col items-center gap-3 p-5">
              <div>
                <div>Name: {item.itemName}</div>
                <div>Price: {item.price}</div>
              </div>
              <div>
                <img src={item.image} />
              </div>
                {isInCart(item) ? (
                  <div onClick={()=>removeFromCart(item)} className="flex px-2 bg-white border items-center justify-center w-[60%] h-10 hover:bg-gray-400 hover:text-white hover:cursor-pointer">
                    remove from cart
                  </div>
                ) : (
                  <div onClick={()=>addToCart(item)} className="flex px-2 bg-white border items-center justify-center w-[60%] h-10 hover:bg-gray-400 hover:text-white hover:cursor-pointer">
                     add to cart
                  </div>
                )}
            </div>
          );
        })}
      </div>

      <div ref={VueRef}></div>
    </div>
  );
}

export default ReactApp;
