"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("72ddcef5-f7b8-4153-b500-e7060e953f46");
  }, []);

  return null;
};
