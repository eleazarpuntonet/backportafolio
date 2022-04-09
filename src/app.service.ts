import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { v4 as uuid } from 'uuid';
@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService
  ) {}
 
  async uploadPublicFile(Body: Buffer, filename: string) {
    const s3 = new S3();
    const Bucket = this.configService.get('AWS_PUBLIC_BUCKET_NAME')
    const params = {
      Bucket,
      Body,
      Key                      : `${uuid()}-${filename}`,
      ACL                      : "public-read",
      ContentDisposition       : "inline",
      CreateBucketConfiguration: 
      {
        LocationConstraint: "us-east-2"
      }
    };

    try {
      const uploadResult = await s3.upload(params).promise();
      
      return uploadResult.Location;
    } catch (e) {
        console.log(e);
    }
  }
}
