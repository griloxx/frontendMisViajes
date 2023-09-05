import { useState } from "react";

export function useToast() {
  const [toastData, setToastData] = useState(null);
  

  const showToast = (tiempo, modelo, texto) => {
    setToastData({ tiempo, modelo, texto });

     const time = setTimeout(() => {
      setToastData(null);
    }, tiempo);
     clearTimeout(time)
  };

  return { toastData, showToast  };
}