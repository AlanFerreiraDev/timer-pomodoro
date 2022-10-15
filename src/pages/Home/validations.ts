import * as zod from 'zod'

export const newCicleFormValidationSchema = zod.object({
  task: zod
    .string()
    .min(1, 'Informe a tarefa')
    .max(100, 'Máximo de 100 caracteres'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser no minimo de 5 minutos')
    .max(60, 'O cilco precisa ser de máximo 60 minutos'),
})
