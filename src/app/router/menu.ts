import { Route } from "./types";
import { Routes } from "./routes";

import Lock from "@/assets/svg/lock.svg";
import Document from "@/assets/svg/document.svg";
import Key from "@/assets/svg/key.svg";
import Fingerprint from "@/assets/svg/fingerprint.svg";
import Identifications from "@/assets/svg/identifications.svg";

export const menu: Route[] = [
  { path: Routes.CREDENTIALS, title: "Credentials", icon: Lock },
  { path: Routes.CREDENTIALS, title: "Secure Notes", icon: Document },
  { path: Routes.CREDENTIALS, title: "Keys", icon: Key },
  { path: Routes.CREDENTIALS, title: "Payments", icon: Lock },
  { path: Routes.CREDENTIALS, title: "Secrets", icon: Fingerprint },
  { path: Routes.CREDENTIALS, title: "Identifications", icon: Identifications },
];
