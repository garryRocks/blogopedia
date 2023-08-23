import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import './Product.css'

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item removed from cart");
  };
  return (
    <div className="flex flex-col justify-between items-center hover:scale-110 transition duration-300 ease-in shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 p-4 mt-10 ml-5 rounded-xl outline-[0.5px] product">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full" />
      </div>
      <div className="flex justify-between gap-12 w-full items-center mt-5"> 
        <div>
          <p className="text-green-600 font-semibold ">${post.price}</p>
        </div>
        {cart.some((p) => p.id === post.id) ? (
          <button onClick={removeFromCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">Remove Item</button>
        ) : (
          <button onClick={addToCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">Add Item</button>
        )}
      </div>
    </div>
  );
};

export default Product;
