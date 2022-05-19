import { Router } from 'express'

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController'

const carsRoutes = Router()

const createCategoryController = new CreateCarController()

carsRoutes.post('/', createCategoryController.handle)

export { carsRoutes }