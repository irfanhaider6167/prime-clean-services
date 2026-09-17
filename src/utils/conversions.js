// src/utils/conversions.js

export const trackWhatsAppClick = () => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18446233986/X_j4CK_IlvscEILj7NtE",
      value: 1.0,
      currency: "PKR",
    });
  }
};

export const trackPhoneCallClick = () => {
  // Phone Call conversion ka Google Ads send_to
  // yahan Google Ads se milne wala ID add karein.

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "phone_call_click", {
      value: 1.0,
      currency: "PKR",
    });
  }
};
