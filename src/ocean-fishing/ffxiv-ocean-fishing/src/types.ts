export type Stop = 'B' | 'C' | 'G' | 'N' | 'R' | 'S' | 'T'
export type Dest = 'B' | 'N' | 'R' | 'T'
export type Time = 'D' | 'S' | 'N'
export type StopTime = `${Stop}${Time}`
export type DestTime = `${Dest}${Time}`
