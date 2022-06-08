export class Score {
    constructor(
        public id: number,
        public rubricTheme: string,
        public week: number,
        public note: string,
        public value: number
    ) {}
}
