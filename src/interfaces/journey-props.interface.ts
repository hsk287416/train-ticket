export interface IJourneyProps {
    from: string;
    to: string;
    exchangeFromTo: () => void;
    showCitySelector: (value: boolean) => void;
}