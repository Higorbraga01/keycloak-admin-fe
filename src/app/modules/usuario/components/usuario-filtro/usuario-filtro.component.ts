import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { getSession } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-usuario-filtro',
  templateUrl: './usuario-filtro.component.html',
  styleUrls: ['./usuario-filtro.component.scss']
})
export class UsuarioFiltroComponent implements OnInit {
  _subs$: Subscription[] = [];
  isButtonDisabled: boolean;
  _isLocked = false;
  isHidden = true;
  form: FormGroup;
  filterFinorSessionData: any;
  filterFinorLimiteSessionData: any;

  @Output() formValue = new EventEmitter();


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: this.fb.control(null),
      firstName: this.fb.control(null),
      lastName: this.fb.control(null),
      email: this.fb.control(null),
    });
    this.form.setValidators(this.atLeastOneFieldRequired);
  }

  atLeastOneFieldRequired(control: AbstractControl): {[key: string]: any} | null {
      if (
        control.get('userName').value ||
        control.get('firstName').value ||
        control.get('lastName').value ||
        control.get('email').value
      ) {
        return null;
      }
      return { error: true };
  }

  togglePanelFiltro() {
    this.isHidden = !this.isHidden;

    this.filterFinorSessionData = getSession('filterFinorSessionData');

    this.filterFinorLimiteSessionData = getSession(
      'filterFinorLimiteSessionData'
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.formValue.emit(this.form.value);
    }
    this.togglePanelFiltro();
  }

  onClear() {
    this.form.reset();
    this.formValue.emit(this.form.value);
    this.togglePanelFiltro();
  }

  onClickOutside() {
    if (!this._isLocked) {
      this.isHidden = true;
    }
  }

  toggleLockMode() {
    this._isLocked = !this._isLocked;
  }
}
