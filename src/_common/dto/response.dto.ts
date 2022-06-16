import { ApiProperty } from "@nestjs/swagger";

export class ResponseDto {
    @ApiProperty({ description: '오류코드' })
    status: number
    
    @ApiProperty({ description: '메시지' })
    result: object
}