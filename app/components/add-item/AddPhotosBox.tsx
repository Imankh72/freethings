import AddPhotoInput from "./AddPhotoInput";

const AddPhotosBox = () => {
  const numbers = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <>
      <div className="text-center text-[14px] leading-[20px] font-medium mb-[10px] lg:hidden">
        <p>Add some images, one image is enough,</p>
        <p className="font-bold">but more images are of course better!</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-[254px,140px,140px] gap-[10px] gap-y-[10px] relative z-20 mb-[42px] justify-center lg:flex-1 lg:grid-rows-[363px,140px,140px,140px]">
        {numbers.map((number) => (
          <AddPhotoInput
            key={number}
            id={number}
            isPrimary={number === 1 && true}
          />
        ))}
        <div className="hidden lg:block text-[34px] leading-[18px] font-bold text-[#FF823F] absolute -top-12 left-0">
          <span className="text-[84px] leading-[20px]">1</span> Picture
        </div>
      </div>
    </>
  );
};

export default AddPhotosBox;
