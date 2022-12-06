import React from "react";
import html2canvas from "html2canvas";
import { StyledMapZoomControls } from "./MapZoomControls";

type Props = {
  printRef: React.RefObject<HTMLDivElement>;
  imgType: "png" | "jpg";
  htmlIdPhotoButton: string;
  htmlIdZoomButtons: string;
  htmlIdUndoRedoButtons: string;
  htmlIdAltitudeButtons: string;
};

/*
    This component manually hides the elements with the given htmlId and htmlId2, then takes a screenshot of the printRef element.
*/
export const ExportMapAsImgButton = ({
  printRef,
  imgType,
  htmlIdPhotoButton,
  htmlIdZoomButtons,
  htmlIdUndoRedoButtons,
  htmlIdAltitudeButtons,
}: Props) => {
  const handleDownloadImage = async () => {
    const element = printRef.current;
    if (element) {
      const hideElement1 = document.getElementById(htmlIdPhotoButton);
      const hideElement1Display = hideElement1?.style?.display ?? "block";
      const hideElement2 = document.getElementById(htmlIdZoomButtons);
      const hideElement2Display = hideElement2?.style?.display ?? "block";
      const hideElement3 = document.getElementById(htmlIdUndoRedoButtons);
      const hideElement3Display = hideElement3?.style?.display ?? "block";
      const hideElement4 = document.getElementById(htmlIdAltitudeButtons);
      const hideElement4Display = hideElement4?.style?.display ?? "block";
      if (hideElement1) {
        hideElement1.style.display = "none";
      }
      if (hideElement2) {
        hideElement2.style.display = "none";
      }
      if (hideElement3) {
        hideElement3.style.display = "none";
      }
      if (hideElement4) {
        hideElement4.style.display = "none";
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
      // CLEANUP hide1 elements
      if (hideElement1) {
        hideElement1.style.display = hideElement1Display;
      }
      // CLEANUP hide2 elements
      if (hideElement2) {
        hideElement2.style.display = hideElement2Display;
      }
      // CLEANUP hide3 elements
      if (hideElement3) {
        hideElement3.style.display = hideElement3Display;
      }
      // CLEANUP hide4 elements
      if (hideElement4) {
        hideElement4.style.display = hideElement4Display;
      }
      // CLEANUP main element bg change
      element.style.backgroundColor = ogBg;
    }
  };
  return (
    <StyledMapZoomControls x={"0%"} y={"20%"} id={htmlIdPhotoButton}>
      <button type="button" onClick={handleDownloadImage}>
        Download as Image
      </button>
    </StyledMapZoomControls>
  );
};
