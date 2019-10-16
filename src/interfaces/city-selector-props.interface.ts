export interface ICitySelectorProps {
    show: boolean;
    cityData: any;
    isLoading: boolean;
    onBack: () => void;
    loadCityData: () => void;
    onSelect: (name: string) => void;
}