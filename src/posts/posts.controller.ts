import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}
    
    @Get()
    @ApiOperation({
        summary: '모든 게시글 조회',
        description: '모든 게시글을 불러온다.'
    })
    async getPosts() {}
    
    @Get(':id')
    @ApiOperation({
        summary: '하나의 게시글 조회',
        description: '하나의 게시글을 불러온다.'
    })
    async getPostById() {}
    
    @Post()
    @ApiOperation({
        summary: '게시글 등록',
        description: '게시글을 등록한다.'
    })
    async createPost(
        @Param('user-id') userId: number,
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
