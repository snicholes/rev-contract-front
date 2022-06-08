import { RubricTheme } from "./rubric-theme";

export class Rubric {
    constructor(
        public id: number,
        public rubricTheme: RubricTheme,
        public score: number,
        public description: string
    ) {}
}
