export function useString() {
  const firstLetterToUpper = (name) => {
    if (name === "ui" || name === "ux") {
      return name.toUpperCase();
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return { firstLetterToUpper };
}
