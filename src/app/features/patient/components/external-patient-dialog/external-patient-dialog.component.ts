import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { AlertComponent } from '../../../../core/components/alert/alert.component';

@Component({
  selector: 'app-external-patient-dialog',
  standalone: true,
  imports: [CommonModule, AlertComponent],
  templateUrl: './external-patient-dialog.component.html',
  styleUrl: './external-patient-dialog.component.scss',
})
export class ExternalPatientDialogComponent implements OnInit {
  @Input()
  showDialog: boolean = true;
  @Input()
  form: string = '';
  private msgClipboard: string = '';
  copyAlert: boolean = false;
  copyAlertMessage: string = '';
  copyAlertType: string = 'info';

  constructor(private notify: NotificationService) {}
  ngOnInit(): void {
    this.msgClipboard = `Bem-vindo(a)! \n\nPara que possamos aproveitar ao máximo nossa consulta e focar nas suas principais necessidades, pedimos que preencha um breve formulário antes de nosso encontro.\n\nBasta clicar no link abaixo e fornecer as informações. Estou aqui para te apoiar em cada passo da sua jornada!\n\n http://localhost:4200/public/pre-consulta/${this.form}`;
  }

  onConfirm(): void {}

  onClose(): void {
    this.showDialog = false;
  }

  toWhatsapp(): void {
    this.copyAlert = false;

    window.open(
      `https://api.whatsapp.com/send?text=${this.msgClipboard.replaceAll(
        '\n',
        '%0A'
      )}`,
      '_blank'
    );
  }

  toClipboard(): void {
    this.copyAlert = false;
    if (!navigator.clipboard) {
      try {
        this.fallback(this.msgClipboard);
        this.showDialog = false;
        this.showCopyAlertSuccess();
      } catch (error) {
        this.showCopyAlertError();
      }
      return;
    }
    navigator.clipboard
      .writeText(this.msgClipboard)
      .then(() => {
        this.showCopyAlertSuccess();
      })
      .catch((error) => {
        this.showCopyAlertError();
      });
  }

  fallback = (text: any) => {
    const isIos = navigator.userAgent.match(/ipad|iphone/i);
    const textarea = document.createElement('textarea');

    textarea.value = text;

    textarea.style.fontSize = '20px';
    document.body.appendChild(textarea);

    if (isIos) {
      const range = document.createRange();
      range.selectNodeContents(textarea);

      const selection = window.getSelection();
      selection!.removeAllRanges();
      selection!.addRange(range);
      textarea.setSelectionRange(0, 999999);
    } else {
      textarea.select();
    }

    document.execCommand('copy');

    document.body.removeChild(textarea);
  };

  showCopyAlertSuccess(): void {
    this.copyAlert = true;
    this.copyAlertMessage = 'Link copiado com sucesso';
    this.copyAlertType = 'info';
  }

  showCopyAlertError(): void {
    this.copyAlert = true;
    this.copyAlertMessage = 'Falha ao copiar, tente novamente';
    this.copyAlertType = 'warning';
  }
}
