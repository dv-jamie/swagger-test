import { ApiProperty } from "@nestjs/swagger";

export class GetPostsDto {
    @ApiProperty({ description: '페이지', default: 1, required: false })
    posts: string[]
}