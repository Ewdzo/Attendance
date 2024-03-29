"use client"

import { NextUIProvider } from "@nextui-org/react";

export const App = ({children}: {children: React.ReactNode}) => (
    <NextUIProvider>
        {children}
    </NextUIProvider>
);