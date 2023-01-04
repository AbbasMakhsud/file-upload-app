import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'file-reader-app';
  files: Array<any> = [];

  constructor() {

  }

  onFileUploaded(event: any) {
    const file:File = event.target.files[0];
    let fileData;
    if (file) {
      var mimeType = file.type;
      console.log(mimeType)
		
      if (file.type !== 'text/plain') {
        alert("Only plain/text files are supported");
        return;
      }
      var reader = new FileReader();
      reader.readAsText(file);

      
      reader.onload = (_event) => {
        fileData = reader.result;
        this.files.push(
          {
            name: file.name,
            size: file.size / 1000,
            uploaded_at: new Date(),
            fileData
          }
        );
      }
    }
  }

  onFileRemove(i: number) {
    if (confirm('Are you sure')) {
      this.files.splice(i, 1);
    }
  }
}
