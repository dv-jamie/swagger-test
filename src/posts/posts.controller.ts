import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiProperty, ApiQuery, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ResponseDto } from 'src/_common/dto/response.dto';
import { GetPostsDto } from './dto/get-posts.dto';
import { PostsService } from './posts.service';

@Controller('posts')
@ApiTags('Posts')
@ApiBadRequestResponse({ description: '잘못된 요청', type: ResponseDto })
@ApiUnauthorizedResponse({ description: '권한 부족', type: ResponseDto })
@ApiNotFoundResponse({ description: '리소스를 찾을 수 없음', type: ResponseDto })
@ApiBearerAuth('accesskey')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}
    
    @Get()
    @ApiOperation({
        summary: '모든 게시글 조회',
        description: '모든 게시글을 불러온다.'
    })
    @ApiQuery({ type: GetPostsDto })
    @ApiOkResponse({ description: 'Get all posts', type: ResponseDto })
    async getPosts() {
        return 'Get Posts'
    }
    
    @Get(':id')
    @ApiOperation({
        summary: '하나의 게시글 조회',
        description: '하나의 게시글을 불러온다.'
    })
    async getPostById(
        @Param('id') postId: number,
    ) {}
    
    @Post()
    @ApiOperation({
        summary: '게시글 등록',
        description: '게시글을 등록한다.'
    })
    async createPost(
        @Body('content') content: string
    ) {}
    
    @Patch(':id')
    @ApiOperation({
        summary: '게시글 수정',
        description: '하나의 게시글을 수정한다.'
    })
    async updatePost() {}
    
    @Delete(':id')
    @ApiOperation({
        summary: '게시글 삭제',
        description: '하나의 게시글을 삭제한다.'
    })
    async deletePost() {}
}
