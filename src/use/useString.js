export function useString() {
  const firstLetterToUpper = (name) => {
    if (name === "ui" || name === "ux") {
      return name.toUpperCase();
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const changeToLowerCase = (name) => {
    if (name === "UI" || name === "UX") {
      return name;
    }
    return name.toLowerCase();
  };

  return { firstLetterToUpper, changeToLowerCase };
}
