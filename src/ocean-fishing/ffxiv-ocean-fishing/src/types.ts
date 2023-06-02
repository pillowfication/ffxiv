export type Route = 'INDIGO' | 'RUBY'
export type Stop = 'B' | 'C' | 'G' | 'N' | 'R' | 'S' | 'T' | 'I' | 'K' | 'O' | 'P'
export type Dest = 'B' | 'N' | 'R' | 'T' | 'O' | 'P'
export type Time = 'D' | 'S' | 'N'
export type StopTime = `${Stop}${Time}`
export type DestTime = `${Dest}${Time}`
