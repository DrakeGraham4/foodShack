import { tacosService } from "../services/TacosService";
import BaseController from "../utils/BaseController";
import { logger } from "../utils/Logger";

export class TacosController extends BaseController {
    constructor() {
        super('api/tacos')
        this.router
        .get('', this.getAllTacos)
        .post('', this.createTaco)
        .delete('/:tacoId', this.removeTaco )
    }
    async getAllTacos(req, res, next) {
        
        try {
            const tacos = await tacosService.getAllTacos()
            res.send(tacos)
        } catch (error) {
            next(error)
        }
    }

    async createTaco(req, res, next) {
        try {
            logger.log(req.body)
            const taco = await tacosService.createTaco(req.body)
            res.send(taco)
        } catch (error) {
            next(error)
        }
    }

    async removeTaco(req, res, next) {
        try {
            logger.log(req.params.tacoId)
            const message = await tacosService.removeTaco(req.params.tacoId)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }
}
