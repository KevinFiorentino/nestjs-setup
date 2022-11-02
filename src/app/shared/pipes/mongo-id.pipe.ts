import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { isMongoId } from 'class-validator';

// isMongoId --> Function
// IsMongoId --> Decorator

@Injectable()
export class MongoIdPipe implements PipeTransform {

  transform(value: string, metadata: ArgumentMetadata) {
    if (!isMongoId(value)) {
      throw new BadRequestException(`${value} not is a MongoID`);
    }
    return value;
  }

}
