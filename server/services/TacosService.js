import { dbContext } from "../db/DbContext"
import { logger } from "../utils/Logger"

class TacosService{
  async createTaco(body) {
      const taco = await dbContext.Tacos.push(body)
      return body
   }
   async getAllTacos() {
        const tacos = await dbContext.Tacos
        return tacos
    }

    async removeTaco(tacoId) {
        logger.log('tacoId from user', typeof tacoId)
        const index = dbContext.Tacos.findIndex(t => t.id.toString() === tacoId)
        if (index === -1)
            throw new Error('no taco at that id')
    }
    dbContext.Tacos

    
}

export const tacosService = new TacosService()