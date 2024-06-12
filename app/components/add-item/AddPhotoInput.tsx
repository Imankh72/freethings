import { ChangeEvent } from "react";
import Image from "next/image";
import { PhotoIcon } from "../svgs/PhotoIcon";
import PlusIcon from "../svgs/PlusIcon";
import { useAddItem } from "@/app/hooks/useAddItem";
import { storeImage } from "@/app/utils/storeImage";

interface AddPhotoInputProps {
  isPrimary?: boolean;
  id: number;
}

const AddPhotoInput = ({ isPrimary = false, id }: AddPhotoInputProps) => {
  const { previewPhotos, setPreviewPhotos, setPhoto } = useAddItem();

  const handlePhotoChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];

    if (e.target.files.length !== 0) {
      setPreviewPhotos(URL.createObjectURL(file), id);
      const image = (await storeImage(file))
        .split(";")
        .at(-1)
        .split(",")
        .at(-1);
      setPhoto(image, id);
    }
  };

  return (
    <div className={`${isPrimary && "col-start-1 col-end-3"}`}>
      {previewPhotos[id - 1]?.length > 0 && (
        <Image
          src={previewPhotos[id - 1]}
          alt={previewPhotos[id - 1].split(".")[0]}
          className={`rounded-[10px] w-full ${
            isPrimary ? "h-[254px] lg:h-[363px]" : "h-[140px]"
          }`}
          width={376}
          height={290}
        />
      )}
      {!previewPhotos[id - 1] && (
        <>
          <input
            type="file"
            id={`add-photo-${id}`}
            hidden
            onChange={handlePhotoChange}
          />
          <label
            htmlFor={`add-photo-${id}`}
            className={`flex flex-col items-center justify-center w-full bg-[#EBEBEB] rounded-[10px] cursor-pointer ${
              isPrimary
                ? "py-[50px] px-[130px] h-[254px] lg:w-full lg:h-[363px]"
                : "py-10 pl-[60px] px-[50px] h-[140px] lg:w-full"
            }`}
          >
            <div className="relative">
              <PhotoIcon />
              <PlusIcon isGreen className="absolute -top-1 -right-[6px]" />
            </div>
            <span className="text-[12px] leading-[20px] whitespace-nowrap">
              add photos
            </span>
          </label>
        </>
      )}
    </div>
  );
};

export default AddPhotoInput;
