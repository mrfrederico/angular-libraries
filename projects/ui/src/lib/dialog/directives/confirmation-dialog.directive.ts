import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';

@Directive({
  selector: '[lab900ConfirmationDialog]',
})
export class ConfirmationDialogDirective {
  @Input() message: string;
  @Input() okButtonText: string;
  @Input() cancelButtonText: string;

  @Output() confirmed: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelled: EventEmitter<void> = new EventEmitter<void>();

  constructor(public dialog: MatDialog) {}

  @HostListener('click') onMouseEnter() {
    const dialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: this.message,
        okButtonText: this.okButtonText,
        cancelButtonText: this.cancelButtonText,
      },
    });

    dialog.beforeClosed().subscribe((data) => {
      if (data) {
        this.confirmed.emit();
      } else {
        this.cancelled.emit();
      }
    });
  }
}
