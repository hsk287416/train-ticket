export interface IHome {
    from: string;
    to: string;
    isCitySelectorVisible: boolean;
    currentSelectingLeftCity: boolean;
    cityData: any;
    isLoadingCityData: boolean;
    isDateSelectorVisible: boolean;
    departDate: number;
    highSpeed: boolean;
}