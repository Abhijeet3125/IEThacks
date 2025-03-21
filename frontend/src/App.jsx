import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <h1>Landing page</h1>
        <h1>
          hey this is the landing page
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.

             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.

             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.

             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
            v
          
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            consequuntur dignissimos perspiciatis voluptatem suscipit tempora,
            ut maiores odio tenetur accusamus, itaque, consequatur quis corporis
            nesciunt nam fugit reprehenderit nulla a.
          </div>
        </h1>
      </div>
    </>
  );
}

export default App;
