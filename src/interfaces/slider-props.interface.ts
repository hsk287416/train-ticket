export interface ISliderProp {
    title: string;
    currentStartHours: number;
    currentEndHours: number;
    onStartChanged: (value: number) => void;
    onEndChanged: (value: number) => void;
}