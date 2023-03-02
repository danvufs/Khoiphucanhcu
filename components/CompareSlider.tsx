import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const CompareSlider = ({
  original,
  restored,
}: {
  original: string;
  restored: string;
}) => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={original} alt="ảnh gốc" />}
      itemTwo={<ReactCompareSliderImage src={restored} alt="ảnh sau khi khôi phục" />}
      portrait 

      className="flex w-[475px] mt-5"
    />
  );
};
