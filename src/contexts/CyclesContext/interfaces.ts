import { ReactNode } from 'react'

export interface CreateCycleData {
  task: string
  minutesAmount: number
}

export interface CyclesContextType {
  cycles: CycleProps[]
  activeCycle: CycleProps | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

export interface CycleProps {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export interface CyclesProviderProps {
  children: ReactNode
}
