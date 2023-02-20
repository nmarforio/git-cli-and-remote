import { useState } from "react";
import { StyledForm, StyledInputContainer } from "./Form.styled";
import { useImmer } from "use-immer";

export default function Form() {
  const [mountain, updateMountain] = useImmer({
    name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  function handleNameChange(event) {
    // get the input
    const inputName = event.target.value;
    console.log(inputName);

    setMountain((prevmountain) => {
      if (prevmountain.name !== inputName) {
        return { ...mountain, name: inputName };
      }
    });
  }

  function handleAltitudeChange(event) {
    const inputAltitude = event.target.value;
    console.log(inputAltitude);

    setMountain((prevmountain) => {
      if (prevmountain.values.altitude !== inputAltitude) {
        return {
          ...mountain,
          values: { ...mountain.values.altitude, altitude: inputAltitude },
        };
      }
    });
  }

  function handleMountainRangeChange(event) {
    const inputRange = event.target.value;
    console.log(inputRange);

    // setMountain((prevmountain) => {
    //   if (prevmountain.values.mountainRange !== inputRange) {
    //     return {
    //       ...mountain,
    //       values: {
    //         ...mountain.values.mountainRange,
    //         mountainRange: inputRange,
    //       },
    //     };
    //   }
    // });
    updateMountain((draft) => {
      // Mutate the draft directly
      draft.values.mountainRange = inputRange;
    });
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input id="name" value={mountain.name} onChange={handleNameChange} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
