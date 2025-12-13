export enum ViewState {
  LANDING = 'LANDING',
  STORY = 'STORY',
  OVERVIEW = 'OVERVIEW',
  PROBLEMS = 'PROBLEMS',
  REGISTER = 'REGISTER',
  FINAL = 'FINAL'
}

export interface Problem {
  id: string;
  title: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  description: string;
  storyContext: string;
  inputExample: string;
  outputExample: string;
  constraints: string[];
}

export interface TimelineEvent {
  season: number;
  year: string;
  title: string;
  description: string;
  icon: 'demogorgon' | 'mindflayer' | 'mall' | 'vecna';
}