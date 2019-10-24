import { createContext } from "react";

export const TrainContext = createContext({
    'trainNumber': '',
    'dStation': '',
    'aStation': '',
    'date': '',
});