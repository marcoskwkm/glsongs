const statsList = [
  'da',
  'pa',
  'vo',
  'vi',
  'me',
] as const satisfies readonly (keyof Stats)[]

export class Stats {
  da: number = 0
  pa: number = 0
  vo: number = 0
  vi: number = 0
  me: number = 0

  constructor(stats: number[]) {
    statsList.forEach((st, i) => (this[st] = stats[i] ?? 0))
  }

  subtract(that: Stats) {
    return new Stats(statsList.map((st) => this[st] - that[st]))
  }
}
