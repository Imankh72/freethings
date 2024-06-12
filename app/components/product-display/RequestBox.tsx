import { useRequestModal } from "@/app/hooks/useRequestModal";

interface RequestBoxProp {
  mobile?: boolean;
}

const RequestBox = ({ mobile = false }: RequestBoxProp) => {
  const { openRequestItemModal } = useRequestModal();

  return (
    <>
      {mobile ? (
        <button
          type="button"
          className="request__box"
          onClick={openRequestItemModal}
        >
          request this item
        </button>
      ) : (
        <button type="button" className="request__box">
          request this item
        </button>
      )}
    </>
  );
};

export default RequestBox;
