import { atom } from "recoil";

export const ActiveIndexServicesCard = atom({
  key: "activeIndexServicesCard",
  default: "Default",
});

export const EnableNotificationPanel = atom({
  key: "isNotificationPanelActive",
  default: false,
});
