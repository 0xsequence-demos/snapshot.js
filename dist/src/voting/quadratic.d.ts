import { QuadraticVote, QuadraticChoice, Strategy } from './types';
export declare function calcPercentageOfSum(part: number, wholeArray: number[]): number;
export declare function calcSqrt(percentageWeight: number, votingPower: number): number;
export default class QuadraticVoting {
    proposal: {
        choices: string[];
    };
    votes: QuadraticVote[];
    strategies: Strategy[];
    selected: QuadraticChoice;
    constructor(proposal: {
        choices: string[];
    }, votes: QuadraticVote[], strategies: Strategy[], selected: QuadraticChoice);
    static isValidChoice(voteChoice: QuadraticChoice, proposalChoices: string[]): boolean;
    getValidVotes(): QuadraticVote[];
    getScores(): number[];
    getScoresByStrategy(): number[][];
    getScoresTotal(): number;
    getChoiceString(): string;
}
