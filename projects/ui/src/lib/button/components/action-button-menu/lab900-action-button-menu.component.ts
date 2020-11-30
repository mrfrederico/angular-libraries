import { Component, Input, ViewChild } from '@angular/core';
import { ActionButton } from '../../models/action-button.model';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'lab900-action-button-menu',
  templateUrl: './lab900-action-button-menu.component.html',
})
export class Lab900ActionButtonMenuComponent {
  @ViewChild('actionMenu', { static: true })
  public actionMenu: MatMenu;

  @Input()
  public actions: ActionButton[];

  @Input()
  public data: any;

  public getLabel(action: ActionButton): string {
    if (typeof action.label === 'function') {
      return action.label(this.data);
    }
    return action.label;
  }

  public getDisabled(action: ActionButton): boolean {
    if (typeof action.disabled === 'function') {
      return action.disabled(this.data);
    }
    return action.disabled;
  }

  public doAction(e: Event, action: ActionButton): void {
    if (action.action) {
      action.action(this.data, e);
    }
  }

  public getPrefixIcon(action: ActionButton): string {
    if (typeof action.prefixIcon === 'function') {
      return action.prefixIcon(this.data);
    }
    return action.prefixIcon;
  }

  public getSuffixIcon(action: ActionButton): string {
    if (typeof action.suffixIcon === 'function') {
      return action.suffixIcon(this.data);
    }
    return action.suffixIcon;
  }
}