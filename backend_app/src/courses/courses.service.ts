import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { Console } from 'console';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
) {}

  async importCourses(courses: any[]) {
    const courseCount = await this.courseRepository.count();
    if (courseCount === 0)
    {   
       for (const course of courses) {
        const { title, description, instructor, schedule } = course;
        await this.courseRepository.save({ title, description, instructor, schedule });
    }
  }
  else
    return {messsage: "json saved before"}
}
  async create(createCourseDto: CreateCourseDto) {
    const NewCourse =  await this.courseRepository.create(createCourseDto)
    return await this.courseRepository.save(NewCourse);
  }

  findAllCourse(paginationOptions: { skip: number; take: number }) {
    return this.courseRepository.findAndCount({
        skip: paginationOptions.skip,
        take: paginationOptions.take,
    });
}


  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
