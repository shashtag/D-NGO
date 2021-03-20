import { model, Schema, Document } from 'mongoose';
import Role from './Role';

export const DOCUMENT_NAME = 'Feeds';
export const COLLECTION_NAME = 'feeds';


export default interface Feeds extends Document {
    name: string;
    message: string;
}
  
const schema = new Schema(
    {
      name: {
        type: Schema.Types.String,
        required: true,
        trim: true,
        maxlength: 100,
      },
      message: {
          type: String,
          required: true
      }
    }
);
  
  export const FeedsModel = model<Feeds>(DOCUMENT_NAME, schema, COLLECTION_NAME);
  