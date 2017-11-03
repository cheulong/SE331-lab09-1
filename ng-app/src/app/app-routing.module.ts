import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {FileNotFoundComponent} from "./filenotfound/file-not-found.component";
import {AddCourseComponent} from "./course/add-course/add-course.component";
import {CourseListComponent} from "./students/course-list/course-list.component";
import {ListCourseComponent} from "./course/list-course/list-course.component";
const appRoutes: Routes = [
  {path: 'add-course', component: AddCourseComponent},
  {path: 'course-list', component: ListCourseComponent},
  {path: '**', component: FileNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
