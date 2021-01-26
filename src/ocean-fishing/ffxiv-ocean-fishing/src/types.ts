export type DestinationStop = 'B' | 'N' | 'R' | 'T'
export type Stop = 'B' | 'C' | 'G' | 'N' | 'R' | 'S' | 'T'
export type Time = 'D' | 'S' | 'N'
export type DestinationStopTime = `${DestinationStop}${Time}`
export type StopTime = `${Stop}${Time}`
