import AddItemRadioButton from "./AddItemRadioButton";

interface AddItemDetailsProps {
  label: string;
  name: string;
  id: number;
  features: {
    id: number;
    feature: string;
    value: 1 | 2 | 3;
  }[];
}

const AddItemDetails = ({ label, features, name }: AddItemDetailsProps) => {
  return (
    <div className="flex items-center justify-between">
      <h6 className="text-[14px] leading-[26px] font-bold whitespace-nowrap">
        {label}
      </h6>
      <div className="flex items-center gap-x-2">
        {features?.map(({ id, feature, value }) => (
          <AddItemRadioButton
            key={id}
            name={name}
            value={value}
            id={id}
            text={feature}
            features={features}
          />
        ))}
      </div>
    </div>
  );
};

export default AddItemDetails;
