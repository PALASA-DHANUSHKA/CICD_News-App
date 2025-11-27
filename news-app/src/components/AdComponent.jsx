import { useEffect } from "react";

const AdComponent = ({ adSlot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXX" // Replace with your AdSense Publisher ID
      data-ad-slot={adSlot} // Replace with your Ad Slot ID
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdComponent;
