export interface IFilterProp {
    name: string;
    checked: boolean;
    value: string;
    toggle: (target: string) => void;
}