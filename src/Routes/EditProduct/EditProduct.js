import React from "react";
import TextInput from "../../Components/Form/TextInput";
import TextareaInput from "../../Components/Form/TextareaInput";
import DropdownInput from "../../Components/Form/DropdownInput";
import { useEffect } from "react";

const EditProduct = () => {
  useEffect(() => {
    document.title = "Edit Product";
  }, []);
  return (
    <div className="main-container">
      <div className=" text-2xl font-customBlack font-bold pb-4">
        Edit Product
      </div>
      <section className="dashboard px-4">
        <form>
          <TextInput label="ID" placeholder="AAA1" type="text" />
          <div className="flex">
            <div className="h-28 w-28 bg-customGray rounded-md"></div>
            <div className="px-6 flex flex-col">
              <h2 className="font-bold text-customBlack py-4">
                Select your product picture
              </h2>
              <div>
                <button className="bg-customPurple text-white py-1.5 px-6 rounded-md">
                  Browse
                </button>
              </div>
            </div>
          </div>
          <TextInput label="Product Name" placeholder="Cuppucino" type="text" />
          <DropdownInput label="Category" />
          <TextInput label="Price" placeholder="$5" type="text" />
          <TextareaInput
            label="Description"
            placeholder="A cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam (microfoam)"
          />
        </form>
      </section>
      <div className="py-4 flex gap-4">
        <button className="bg-customPurple py-2 px-6 rounded-md text-white">
          Save
        </button>
        <button className="text-darkGray py-2 px-6 rounded-md">Cancel</button>
      </div>
    </div>
  );
};

export default EditProduct;
