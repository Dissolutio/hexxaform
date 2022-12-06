import React from "react";
import html2canvas from "html2canvas";

type Props = {
  printRef: React.RefObject<HTMLDivElement>;
  imgType: "png" | "jpg";
  htmlIdMapControls: string;
};

/*
    This component manually hides the elements with the given htmlId and htmlId2, then takes a screenshot of the printRef element.
*/
export const ExportMapAsImgButton = ({
  printRef,
  imgType,
  htmlIdMapControls,
}: Props) => {
  const handleDownloadImage = async () => {
    const element = printRef.current;
    if (element) {
      const hideElement = document.getElementById(htmlIdMapControls);
      const hideElementDisplay = hideElement?.style?.display ?? "block";
      if (hideElement) {
        hideElement.style.display = "none";
      }
      const ogBg = element.style.backgroundColor;
      element.style.backgroundColor = "var(--black)";
      const canvas = await html2canvas(element);

      const data = canvas.toDataURL(`image/${imgType}`);
      const link = document.createElement("a");

      if (typeof link.download === "string") {
        link.href = data;
        link.download = `image.${imgType}`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(data);
      }
      // CLEANUP hide elements
      if (hideElement) {
        hideElement.style.display = hideElementDisplay;
      }
      // CLEANUP main element bg change
      element.style.backgroundColor = ogBg;
    }
  };
  return (
    <button type="button" onClick={handleDownloadImage}>
      Download as Image
    </button>
  );
};
