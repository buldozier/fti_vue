let documentBody = document.getElementsByTagName("body")[0];

export const showBodyOverflow = () => {
  documentBody.style.overflow = null;
};
export const hideBodyOverflow = () => {
  documentBody.style.overflow = "hidden";
};
