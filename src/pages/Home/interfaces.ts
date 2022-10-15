import * as zod from 'zod'
import { newCicleFormValidationSchema } from './validations'

export type NewCycleFormData = zod.infer<typeof newCicleFormValidationSchema>
