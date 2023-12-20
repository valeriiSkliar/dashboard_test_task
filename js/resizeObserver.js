import {handleVisibility} from "./functions";

export const resizeObserver = new ResizeObserver((entries, observer) => {
  entries.forEach((entry) => {

      handleVisibility(entry.contentRect.width > 960);

  });
});
