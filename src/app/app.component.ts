import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test1';





  addmodel: { id: number, name: string, img: string } = {
    id: 0,
    name: '',
    img: '',
  };

  items: { id: number, name: string, img: string }[] = [
    {
      id: 1,
      name: 'Boy1',
      img: '../assets/Xiaomi_logo.svg.png',
    },

    {
      id: 2,
      name: 'Boy2',
      img: '',
    },
    {
      id: 3,
      name: 'Boy3',
      img: '',
    }
  ]

  saveFun() {
    this.addmodel.id = this.items.length + 1
    this.items.push(this.addmodel);
    const reset = {
      id: 0,
      name: '',
      img: '',
    };
    this.addmodel = reset

  }

  saveedit() {
    this.items = this.items.filter(F => F.id !== this.addmodel.id)
    this.items.push(this.addmodel);
    const reset = {
      id: 0,
      name: '',
      img: '',
    };
    this.addmodel = reset
  }

  DelFun(id: number) {
    this.items = this.items.filter(F => F.id !== id)
  }

  Edit(id: number) {
    let finditem = this.items.find(F => F.id == id)
    this.addmodel.id = finditem!.id;
    this.addmodel.name = finditem!.name;
  }

}


