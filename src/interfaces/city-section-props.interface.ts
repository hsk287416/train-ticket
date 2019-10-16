export interface ICitySectionProps {
    title: string;
    cities: any[];
    onSelect: (name: string) => void;
}