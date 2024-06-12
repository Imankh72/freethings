import Select from "react-select";

const SelectPreviousLocation = () => {
  const options = [{ value: "address2", label: "Address 2" }];

  return (
    <div className="h-12">
      <Select options={options} placeholder="Choose from previous listings" />
    </div>
  );
};

export default SelectPreviousLocation;
