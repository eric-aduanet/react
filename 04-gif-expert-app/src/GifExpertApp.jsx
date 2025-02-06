import { useState } from "react";
import "./styles.css";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (event) => {
    // setCategories((cat) => [elem, ...cat]);
    if (categories.includes(event)) return;
    setCategories((cat) => [event, ...cat]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory
        onValue={onAddCategory}
        //   setCategories={setCategories}
      />
      {categories.map((x) => (
        <GifGrid key={x} category={x} />
      ))}
    </>
  );
};
