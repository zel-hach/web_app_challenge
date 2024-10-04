import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Query, UseGuards } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

@Post('upload')
@UseInterceptors(FileInterceptor('file'))
async uploadFile(@UploadedFile() file: Express.Multer.File) {
  try {
    const coursesData = JSON.parse(file.buffer.toString());
      await this.coursesService.importCourses(coursesData);
      return { message: 'Courses imported successfully!',data:coursesData};
  } catch (error) {
      console.error('Error importing courses:', error);
      throw new Error('Error importing courses');
  }
}
@Get()
async findAll(
  @Query('page') page: number = 1, 
  @Query('limit') limit: number = 20
) {
    page = page > 0 ? page : 1;
    limit = limit > 0 ? limit : 20;

    const [results, total] = await this.coursesService.findAllCourse({
        skip: (page - 1) * limit,
        take: limit,
    });

    return {
        data: results,
        total,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
    };
}


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }
}
