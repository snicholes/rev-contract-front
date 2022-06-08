import { Rubric } from "./rubric";
import { Score } from "./score";

export class Associate {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public rubrics: Rubric[],
        public actualScores: Score[]
    ) {}
}
