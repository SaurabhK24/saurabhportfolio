import logging
import boto3
from botocore.exceptions import ClientError

def create_presigned_url(bucket_name, object_name, expiration=604800):
    """Generate a presigned URL to share an S3 object

    :param bucket_name: string
    :param object_name: string
    :param expiration: Time in seconds for the presigned URL to remain valid (default: 7 days)
    :return: Presigned URL as string. If error, returns None.
    """

    # Generate a presigned URL for the S3 object
    s3_client = boto3.client('s3')
    try:
        response = s3_client.generate_presigned_url('get_object',
                                                    Params={'Bucket': bucket_name,
                                                            'Key': object_name},
                                                    ExpiresIn=expiration)
    except ClientError as e:
        logging.error(e)
        return None

    # The response contains the presigned URL
    return response

# Usage
url = create_presigned_url('sauravportfoliobucket', 'saurabh_khanal_resume.pdfInfo')

if url is not None:
    print(f"Presigned URL: {url}")
    # Now, you can provide this URL on your website for users to download the S3 object.
