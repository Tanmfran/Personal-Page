import React from "react";
import { IconHolder } from "../IconHolder/IconHolder";

export const AppHeader = () => {
  const headerData = {
    src: "https://cdn.iconscout.com/icon/premium/png-512-thumb/t-letter-1-840447.png",
    alt: "T-Initial",
  };

  return (
    <>
      <div>
        <IconHolder icon={headerData} text={"Tannor Franks"} />
      </div>
    </>
  );
};
