export const validation = (valueToCheck: string) => {
    let valid = true;
  
    if (!valueToCheck) {
      valid = false;
    } else if (valueToCheck === "") {
      valid = false;
    }
  
    return valid;
  };