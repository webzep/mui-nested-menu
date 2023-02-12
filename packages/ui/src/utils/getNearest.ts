import { CalculatedMarkObject } from '../components/Slider.styles';

export const getNearest = (marks: CalculatedMarkObject[], goal: number) =>
    marks.reduce((p, c) => (Math.abs(c.dist - goal) < Math.abs(p.dist - goal) ? c : p));
