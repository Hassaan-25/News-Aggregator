import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { Input } from "@chakra-ui/react";
import { Colors } from "../../../constants/colors";

const debounceUpdater = debounce((callBack: any) => {
  callBack();
}, 1000);

interface DebouncedInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isRequired?: boolean;
  type?: string;
  isDisabled?: boolean;
}

const DebouncedInput = ({
  onChange,
  value = "",
  placeholder = "",
  isRequired = false,
  type = "text",
  isDisabled = false,
}: DebouncedInputProps) => {
  const [inputValue, setInputValue] = useState<string>(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    debounceUpdater(() => onChange(event.target.value));
  };

  return (
    <Input
      disabled={isDisabled}
      required={isRequired}
      placeholder={placeholder}
      type={type}
      value={inputValue}
      onChange={handleChange}
      size={"lg"}
      borderRadius={4}
      width={["300px", "250px"]}
      background={Colors.white}
      sx={{
        "::placeholder": {
          color: `${Colors.placeHolderText}`,
        },
      }}
    />
  );
};

export default DebouncedInput;
