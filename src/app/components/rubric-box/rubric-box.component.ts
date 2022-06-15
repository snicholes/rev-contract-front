import { Component, Input, OnInit } from '@angular/core';
import { Rubric } from 'src/app/models/rubric';
import { RubricService } from 'src/app/services/rubric.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rubric-box',
  templateUrl: './rubric-box.component.html',
  styleUrls: ['./rubric-box.component.css']
})
export class RubricBoxComponent implements OnInit {
  @Input() rubric!: Rubric;
  editMode: boolean = false;
  modeBtnMsg: string = 'Edit';
  loadMsg: string = '';
  newDesc: string = '';

  constructor(private rubricServ: RubricService, private userServ: UserService) { }

  ngOnInit(): void {
    this.newDesc = this.rubric.description;
  }

  switchEditMode(): void {
    this.editMode = !this.editMode;
    if (this.editMode) this.modeBtnMsg = 'Cancel';
    else this.modeBtnMsg = 'Edit';
  }

  submitEdit(): void {
    (<HTMLButtonElement> document.getElementById('rubricEditBtn_' + this.rubric.id)).disabled=true;
    (<HTMLButtonElement> document.getElementById('submitRubricBtn_' + this.rubric.id)).disabled=true;
    this.loadMsg = 'Loading... Please be patient.';
    this.rubric.description = this.newDesc;
    this.rubricServ.editRubric(this.rubric)?.subscribe(
      resp => {
        if (resp) this.userServ.setUser(resp);
        this.switchEditMode();
        this.loadMsg = '';
        (<HTMLButtonElement> document.getElementById('rubricEditBtn_' + this.rubric.id)).disabled=false;
        (<HTMLButtonElement> document.getElementById('submitRubricBtn_' + this.rubric.id)).disabled=false;
      }
    );
  }

}
