import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';


@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit{

  @Input({
    required:true
  })
  course: Course;

  @Input({required: true})
  index: number;



@Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }
  ngOnInit(): void {

  }

  onCourseViewed() {
    console.log("card component - button clicked...");
    this.courseSelected.emit(this.course);
  }
  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }

  }

 

}


