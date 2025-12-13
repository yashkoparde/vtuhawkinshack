import { Problem, TimelineEvent } from './types';

export const PROBLEMS: Problem[] = [
  {
    id: 'P-001',
    title: 'The Christmas Lights',
    difficulty: 'EASY',
    storyContext: "Joyce Byers has set up a string of lights to communicate with Will in the Upside Down. However, the signals are scrambled.",
    description: "Given a string of alphabets representing the lights, decode the message where every character is shifted by N positions based on the 'Upside Down' interference pattern.",
    inputExample: "String: 'IFMMP', Shift: -1",
    outputExample: "'HELLO'",
    constraints: ["1 <= Length <= 1000", "Shift N is an integer"]
  },
  {
    id: 'P-002',
    title: 'Tunnels of Hawkins',
    difficulty: 'MEDIUM',
    storyContext: "The Mind Flayer has dug a network of tunnels beneath the pumpkin patch. Hopper needs to find the shortest path to the hub.",
    description: "You are given a grid representing the underground map. 0 represents a tunnel, 1 represents soil. Find the shortest path from start (0,0) to end (N,M) using BFS.",
    inputExample: "Grid: [[0,0,1],[1,0,1],[1,0,0]]",
    outputExample: "Path Length: 5",
    constraints: ["Grid size <= 50x50", "Moves: Up, Down, Left, Right"]
  },
  {
    id: 'P-003',
    title: 'Vecna\'s Curse',
    difficulty: 'HARD',
    storyContext: "Vecna chooses his victims based on their trauma level. Max needs to find the frequency of her favorite song to break the trance.",
    description: "Given a stream of audio frequencies, find the longest repeating non-overlapping substring (the melody) that can save a victim.",
    inputExample: "Audio: [10, 20, 30, 10, 20, 40]",
    outputExample: "Pattern: [10, 20]",
    constraints: ["Array Length <= 10^5"]
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    season: 1,
    year: '1983',
    title: 'The Vanishing of Will Byers',
    description: 'A young boy vanishes. A girl with psychokinetic abilities appears. The Gate is opened.',
    icon: 'demogorgon'
  },
  {
    season: 2,
    year: '1984',
    title: 'The Mind Flayer',
    description: 'A shadow monster looms over Hawkins. The tunnels spread beneath the earth.',
    icon: 'mindflayer'
  },
  {
    season: 3,
    year: '1985',
    title: 'The Battle of Starcourt',
    description: 'A secret Soviet lab opens the gate again. The Mind Flayer builds a body.',
    icon: 'mall'
  },
  {
    season: 4,
    year: '1986',
    title: 'Vecna\'s Curse',
    description: 'A dark wizard from the Upside Down begins claiming teenagers. Hawkins splits apart.',
    icon: 'vecna'
  }
];

export const RULES = [
  "No communication with the Upside Down during coding hours.",
  "Teams of 2-4. Solo operatives allowed but risky.",
  "All code must be submitted before the fourth chime.",
  "Friends don't lie. Plagiarism results in immediate disqualification."
];