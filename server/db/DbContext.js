import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);


  Tacos = [{id: 1, name: 'Supreme'}, {id: 2, name: 'Spicy'}]
}

export const dbContext = new DbContext()
