import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getModels").then((res) => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });
  return (
    <div className="">
      <Select
        defaultValue={model}
        placeholder={model}
        options={models?.modelOptions}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        onChange={(e) => setModel(e.value)}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "rgb(52,53,65)",
            borderColor: "transparent",
          }),
          menu: (base, state) => ({
            ...base,
            backgroundColor: "rgb(52,53,65)",
            padding: "10px",
            borderRadius: "10px",
          }),
          option: (base, state) => ({
            ...base,
            color: "#e5e7eb",
            backgroundColor: state.isFocused ? "#4b5563" : "rgb(52,53,65)",
            borderRadius: "5px",
            padding: "10px",
            width: "100%",
          }),
          singleValue: (base) => ({
            ...base,
            color: "#e5e7eb",
          }),
        }}
      />
    </div>
  );
}

export default ModelSelection;
